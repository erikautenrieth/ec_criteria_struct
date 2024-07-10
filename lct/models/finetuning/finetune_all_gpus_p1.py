import torch
import os
from unsloth import FastLanguageModel
from trl import SFTTrainer
from transformers import TrainingArguments
from datasets import load_from_disk, DatasetDict

print(f"Using {torch.cuda.device_count()} GPUs")


if torch.cuda.device_count() > 1:
    print(f"Using {torch.cuda.device_count()} GPUs")