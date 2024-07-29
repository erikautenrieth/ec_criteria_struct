#pip install "unsloth[colab-new] @ git+https://github.com/unslothai/unsloth.git"
#pip install --no-deps xformers "trl<0.9.0" peft accelerate bitsandbytes


# pip install transformers==4.38.0
import torch
import os
from unsloth import FastLanguageModel
from trl import SFTTrainer
from transformers import TrainingArguments
from datasets import load_from_disk, DatasetDict


if torch.cuda.device_count() > 1:
        print(f"Using {torch.cuda.device_count()} GPUs")



output_dir  = "outputs/outputs_base"
os.makedirs(output_dir, exist_ok=True)

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



model = FastLanguageModel.get_peft_model(
        model               = model,
        r                   = 16,
        target_modules      = ["q_proj", "k_proj", "v_proj", "o_proj",
                               "gate_proj", "up_proj", "down_proj"],
        lora_alpha          = 16,
        lora_dropout        = 0,
        bias                = "none",
        layers_to_transform = None,
        layers_pattern      = None,
        use_gradient_checkpointing = True,
        random_state        = 3407,
        max_seq_length      = 2048, 
        use_rslora          = False,
        modules_to_save     = None,
        init_lora_weights   = True,
        loftq_config        = {},
        temporary_location  = "_unsloth_temporary_saved_buffers",
    )

## Try to use 2 GPUs
#model = torch.nn.DataParallel(model, device_ids=[0,1])

## 80/20 Training 904 Dokumente Training, 202 Test Set [Random]
llama3_prompt = """Below is an instruction that describes a task, paired with an input that provides further context. Write a response that appropriately completes the request.

### Instruction:
{}

### Input:
{}

### Response:
{}"""

EOS_TOKEN = tokenizer.eos_token 

def formatting_prompts_func(examples):
    instructions = examples["instruction"]
    inputs       = examples["input"]
    outputs      = examples["output"]
    texts = []
    for instruction, input, output in zip(instructions, inputs, outputs):
        # Must add EOS_TOKEN, otherwise your generation will go on forever!
        text = llama3_prompt.format(instruction, input, output) + EOS_TOKEN
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
    model=model,
    tokenizer=tokenizer,
    train_dataset=train,
    eval_dataset=test,
    dataset_text_field="text",
    max_seq_length=max_seq_length,  # Default value
    dataset_num_proc=4,  # User-defined
    packing=True,  # User-defined
    args=TrainingArguments(
        per_device_train_batch_size=8,  # Default: 8
        gradient_accumulation_steps=1,  # Default: 1
        per_device_eval_batch_size=8,  # Default: 8
        num_train_epochs=3,  # Default: 3
        warmup_ratio=0.0,  # Default: 0.0
        learning_rate=5e-5,  # Default: 5e-5
        fp16 = not torch.cuda.is_bf16_supported(),
        bf16 = torch.cuda.is_bf16_supported(),
        optim="adamw_hf",  # Default: adamw_hf
        weight_decay=0.0,  # Default: 0.0
        lr_scheduler_type="linear",  # Default: linear
        seed=42,  # Default: 42
        output_dir=output_dir,  
        logging_steps=500,  # Default: 500
        evaluation_strategy="no",  # Default: no
        eval_steps=None,  # Default: None
        save_strategy="steps",  # Default: steps
        save_steps=500,  # Default: 500
        load_best_model_at_end=False,  # Default: False
        metric_for_best_model=None,  # Default: None
        greater_is_better=None,  # Default: None
        group_by_length=False,  # Default: False
        gradient_checkpointing=False,  # Default: False
        max_grad_norm=1.0,  # Default: 1.0
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

model.save_pretrained(f"8b_prompt2_finetuned_models/llama3_8b_Lora_baseline_ep10")


# model.push_to_hub("your_name/lora_model", token = "...") # Online saving