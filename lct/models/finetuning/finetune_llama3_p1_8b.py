#pip install "unsloth[colab-new] @ git+https://github.com/unslothai/unsloth.git"
#pip install --no-deps xformers "trl<0.9.0" peft accelerate bitsandbytes
import torch
import os
from unsloth import FastLanguageModel
from trl import SFTTrainer
from transformers import TrainingArguments
from datasets import load_from_disk, DatasetDict


if torch.cuda.device_count() > 1:
        print(f"Using {torch.cuda.device_count()} GPUs")


r = 128
epoch = 20


max_seq_length = 2048 # Choose any! We auto support RoPE Scaling internally!
dtype = None # None for auto detection. Float16 for Tesla T4, V100, Bfloat16 for Ampere+
load_in_4bit = True # Use 4bit quantization to reduce memory usage. Can be False.


model, tokenizer = FastLanguageModel.from_pretrained(
    model_name = "meta-llama/Meta-Llama-3-8B-Instruct", 
    max_seq_length = max_seq_length,
    dtype = dtype,
    load_in_4bit = load_in_4bit,
    token = "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"
)

## 2048 _> 224.00 MiB. GPU 
model = FastLanguageModel.get_peft_model(
    model,
    r = r, # Choose any number > 0 ! Suggested 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 
    target_modules = ["q_proj", "k_proj", "v_proj", "o_proj",
                      "gate_proj", "up_proj", "down_proj",],
    lora_alpha = 256, # 16,
    lora_dropout=0.05,
    bias = "none",    # Supports any, but = "none" is optimized
    use_gradient_checkpointing = "unsloth", # True or "unsloth" for very long context  # [NEW] "unsloth" uses 30% less VRAM, fits 2x larger batch sizes!
    random_state = 3407,
    use_rslora = True,  # We support rank stabilized LoRA
    loftq_config = None, # And LoftQ
)

## Try to use 2 GPUs
#model = torch.nn.DataParallel(model, device_ids=[0,1])

## 80/20 Training 904 Dokumente Training, 202 Test Set [Random]
## Dataset muss in der selben Struktur sein
alpaca_prompt = """Below is an instruction that describes a task, paired with an input that provides further context. Write a response that appropriately completes the request.

### Instruction:
{}

### Input:
{}

### Response:
{}"""

EOS_TOKEN = tokenizer.eos_token # Must add EOS_TOKEN

def formatting_prompts_func(examples):
    instructions = examples["instruction"]
    inputs       = examples["input"]
    outputs      = examples["output"]
    texts = []
    for instruction, input, output in zip(instructions, inputs, outputs):
        # Must add EOS_TOKEN, otherwise your generation will go on forever!
        text = alpaca_prompt.format(instruction, input, output) + EOS_TOKEN
        texts.append(text)
    return { "text" : texts, }
pass


dataset_path = 'dataset/dataset_p1_prompt6'
dataset = load_from_disk(dataset_path)
train_test_split = dataset['train'].train_test_split(test_size=0.1, seed=42)
train = train_test_split['train'] # 723 Files
test = train_test_split['test'] # 81 Files
train = train.map(formatting_prompts_func, batched=True)
test = test.map(formatting_prompts_func, batched=True)


trainer = SFTTrainer(
    model = model,
    tokenizer = tokenizer,
    train_dataset = train,
    eval_dataset = test,
    dataset_text_field = "text",
    max_seq_length = max_seq_length,
    dataset_num_proc = 4,  
    packing = True,  
    args = TrainingArguments(
        per_device_train_batch_size = 2,  
        gradient_accumulation_steps = 8,  
        per_device_eval_batch_size = 4,  
        num_train_epochs = epoch,  
        warmup_ratio = 0.1,  
        learning_rate = 5e-5, 
        fp16 = not torch.cuda.is_bf16_supported(),
        bf16 = torch.cuda.is_bf16_supported(),
        optim = "adamw_8bit",
        weight_decay = 0.05,  
        lr_scheduler_type = "cosine",  
        seed = 42, 
        output_dir = "outputs_8b",
        logging_steps = 50,  
        evaluation_strategy = 'steps',  
        eval_steps = 500,  
        save_strategy = 'steps',  
        save_steps = 500,  
        save_total_limit = 3,  
        load_best_model_at_end = True,
        metric_for_best_model = "eval_loss", 
        greater_is_better = False,  
        group_by_length = True,  
        gradient_checkpointing = True,  
        max_grad_norm = 1.0,  
    ),
)


#@title Show current memory stats
gpu_stats = torch.cuda.get_device_properties(0)
start_gpu_memory = round(torch.cuda.max_memory_reserved() / 1024 / 1024 / 1024, 3)
max_memory = round(gpu_stats.total_memory / 1024 / 1024 / 1024, 3)
print(f"GPU = {gpu_stats.name}. Max memory = {max_memory} GB.")
print(f"{start_gpu_memory} GB of memory reserved.")


trainer_stats = trainer.train()

used_memory = round(torch.cuda.max_memory_reserved() / 1024 / 1024 / 1024, 3)
used_memory_for_lora = round(used_memory - start_gpu_memory, 3)
used_percentage = round(used_memory         /max_memory*100, 3)
lora_percentage = round(used_memory_for_lora/max_memory*100, 3)
print(f"{trainer_stats.metrics['train_runtime']} seconds used for training.")
print(f"{round(trainer_stats.metrics['train_runtime']/60, 2)} minutes used for training.")
print(f"Peak reserved memory = {used_memory} GB.")
print(f"Peak reserved memory for training = {used_memory_for_lora} GB.")
print(f"Peak reserved memory % of max memory = {used_percentage} %.")
print(f"Peak reserved memory for training % of max memory = {lora_percentage} %.")

model.save_pretrained(f"8b_prompt2_finetuned_models/llama3_8b_Lora_ep{epoch}_r{r}")
# model.push_to_hub("your_name/lora_model", token = "...") # Online saving