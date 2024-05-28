from transformers import AutoTokenizer, AutoModelForCausalLM
import transformers
import torch
import os
import torch.distributed as dist

def setup_distributed():
    dist.init_process_group(backend="nccl")
    local_rank = int(os.environ["LOCAL_RANK"])
    torch.cuda.set_device(local_rank)
    return local_rank

model_name = "tiiuae/falcon-180b"
local_rank = setup_distributed()

tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(
        model_name, torch_dtype=torch.bfloat16, trust_remote_code=True
    ).to(local_rank)

# Enable gradient checkpointing
model.gradient_checkpointing_enable()

pipeline = transformers.pipeline(
        "text-generation",
        model=model,
        tokenizer=tokenizer,
        device=local_rank,
    )

sequences = pipeline(
        "Girafatron is obsessed with giraffes, the most glorious animal on the face of this Earth. Giraftron believes all other animals are irrelevant when compared to the glorious majesty of the giraffe.\nDaniel: Hello, Girafatron!\nGirafatron:",
        max_length=200,
        do_sample=True,
        top_k=10,
        num_return_sequences=1,
        eos_token_id=tokenizer.eos_token_id,
    )

if dist.get_rank() == 0:  # Only print on the main process
    for seq in sequences:
        print(f"Result: {seq['generated_text']}")
