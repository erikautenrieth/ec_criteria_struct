import os
import torch
import optuna
from datasets import load_from_disk, DatasetDict
from transformers import TrainingArguments, TrainerCallback
from unsloth import FastLanguageModel
from trl import SFTTrainer
from sklearn.metrics import accuracy_score, precision_recall_fscore_support

# Set environment variable for GPU usage
os.environ["CUDA_VISIBLE_DEVICES"] = "0"

# Alpaca prompt template
alpaca_prompt = """Below is an instruction that describes a task, paired with an input that provides further context. Write a response that appropriately completes the request.

### Instruction:
{}

### Input:
{}

### Response:
{}"""

EOS_TOKEN = ""

def formatting_prompts_func(examples):
    instructions = examples["instruction"]
    inputs = examples["input"]
    outputs = examples["output"]
    texts = []
    for instruction, input, output in zip(instructions, inputs, outputs):
        text = alpaca_prompt.format(instruction, input, output) + EOS_TOKEN
        texts.append(text)
    return {"text": texts}

dataset_path = 'dataset/dataset_p1_prompt6'
dataset = load_from_disk(dataset_path)
train_test_split = dataset['train'].train_test_split(test_size=0.1, seed=42)
train = train_test_split['train']
test = train_test_split['test']
train = train.map(formatting_prompts_func, batched=True)
test = test.map(formatting_prompts_func, batched=True)

# Function to compute metrics
def compute_metrics(pred):
    labels = pred.label_ids
    preds = pred.predictions.argmax(-1)
    precision, recall, f1, _ = precision_recall_fscore_support(labels, preds, average='weighted')
    acc = accuracy_score(labels, preds)
    return {
        'accuracy': acc,
        'f1': f1,
        'precision': precision,
        'recall': recall
    }

# Optuna objective function
def objective(trial):
    r = trial.suggest_categorical("r", [16, 64, 128, 512, 1024, 2048])
    lora_alpha = trial.suggest_int("lora_alpha", 16, 256)
    lora_dropout = trial.suggest_float("lora_dropout", 0.01, 0.3)
    learning_rate = trial.suggest_float("learning_rate", 1e-5, 1e-3, log=True)
    num_train_epochs = trial.suggest_int("num_train_epochs", 3, 10)
    lr_scheduler_type = trial.suggest_categorical("lr_scheduler_type", ["linear", "cosine", "constant"])

    model, tokenizer = FastLanguageModel.from_pretrained(
        model_name="meta-llama/Meta-Llama-3-8B-Instruct",
        max_seq_length=2048,
        dtype=None,
        load_in_4bit=True,
        token="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"
    )

    model = FastLanguageModel.get_peft_model(
        model,
        r=r,
        target_modules=["q_proj", "k_proj", "v_proj", "o_proj", "gate_proj", "up_proj", "down_proj"],
        lora_alpha=lora_alpha,
        lora_dropout=lora_dropout,
        bias="none",
        use_gradient_checkpointing="unsloth",
        random_state=3407,
        use_rslora=True,
        loftq_config=None,
    )

    training_args = TrainingArguments(
        per_device_train_batch_size=4,
        gradient_accumulation_steps=4,
        per_device_eval_batch_size=8,
        num_train_epochs=num_train_epochs,
        warmup_ratio=0.1,
        learning_rate=learning_rate,
        fp16=not torch.cuda.is_bf16_supported(),
        bf16=torch.cuda.is_bf16_supported(),
        optim="adamw_8bit",
        weight_decay=0.01,
        lr_scheduler_type=lr_scheduler_type,
        seed=3407,
        output_dir="outputs_8b",
        logging_steps=10,
        evaluation_strategy='epoch',
        eval_steps=100,
        eval_accumulation_steps=4,
        save_strategy='epoch',
        metric_for_best_model="eval_loss",
        greater_is_better=False,
        load_best_model_at_end=True,
    )

    trainer = SFTTrainer(
        model=model,
        tokenizer=tokenizer,
        train_dataset=train,
        eval_dataset=test,
        dataset_text_field="text",
        max_seq_length=2048,
        dataset_num_proc=1,
        packing=True,
        args=training_args,
        compute_metrics=compute_metrics,
    )

    trainer.train()
    eval_results = trainer.evaluate(eval_dataset=test)
    return eval_results['eval_loss']

# Create Optuna study and optimize
study = optuna.create_study(direction="minimize")
study.optimize(objective, n_trials=20)

# Output best trial results
print("Best trial:")
trial = study.best_trial

print(f"  Loss: {trial.value}")
print("  Params: ")
for key, value in trial.params.items():
    print(f"    {key}: {value}")
