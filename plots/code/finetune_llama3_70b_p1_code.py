import torch
import os
from unsloth import FastLanguageModel
from trl import SFTTrainer
from transformers import TrainingArguments
from datasets import load_from_disk

model, tokenizer = FastLanguageModel.from_pretrained(
    model_name = "meta-llama/Meta-Llama-3-70B-Instruct",
    max_seq_length = 2048,
    dtype = None,
    load_in_4bit = True,
    token = "hf_..."
)

model = FastLanguageModel.get_peft_model(
    model,
    r = 256,
    target_modules = ["q_proj", "k_proj", "v_proj", "o_proj",
                      "gate_proj", "up_proj", "down_proj",],
    lora_alpha = 256,
    lora_dropout=0.05,
    bias = "none",
    use_gradient_checkpointing = "unsloth",
    random_state = 3407,
    use_rslora = True,
    loftq_config = None,
)

llama3_prompt = """Below is an instruction that describes a task, 
                   paired with an input that provides further context. 
                   Write a response that appropriately completes the request.
### Instruction:
{}

### Input:
{}

### Response:
{}"""

def formatting_prompts_func(examples):
    instructions = examples["instruction"]
    inputs       = examples["input"]
    outputs      = examples["output"]
    texts = []
    for instruction, input, output in zip(instructions, inputs, outputs):
        text = llama3_prompt.format(instruction, input, output) + tokenizer.eos_token
        texts.append(text)
    return { "text" : texts, }
pass


dataset = load_from_disk('PATH_TO_DATASET')
train_test_split = dataset['train'].train_test_split(test_size=0.1, seed=42)
train = train_test_split['train'].map(formatting_prompts_func, batched=True)
test = train_test_split['test'].map(formatting_prompts_func, batched=True)

trainer = SFTTrainer(
    model = model,
    tokenizer = tokenizer,
    train_dataset = train,
    eval_dataset = test,
    dataset_text_field = "text",
    max_seq_length = 2024,
    dataset_num_proc = 4,  
    packing = True,  
    args = TrainingArguments(
        per_device_train_batch_size = 2,  
        gradient_accumulation_steps = 8,  
        per_device_eval_batch_size = 4,   
        num_train_epochs = 10,
        warmup_ratio = 0.1,
        learning_rate = 5e-5,
        fp16 = not torch.cuda.is_bf16_supported(),
        bf16 = torch.cuda.is_bf16_supported(),
        optim = "adamw_8bit",
        weight_decay = 0.05,  
        lr_scheduler_type = "cosine",
        seed = 42, 
        output_dir = "OUTPUT_PATH",
        logging_steps = 50,  
        evaluation_strategy = 'steps',  
        eval_steps = 100,  
        save_strategy = 'steps',  
        save_steps = 100,  
        load_best_model_at_end = True,
        metric_for_best_model = "eval_loss", 
        greater_is_better = False,  
        group_by_length = True,  
        gradient_checkpointing = True,  
        max_grad_norm = 1.0,  
    ),
)

trainer_stats = trainer.train()
model.save_pretrained("MODEL_PATH")