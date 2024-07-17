import os
import torch
import torch.distributed as dist
from torch.nn.parallel import DistributedDataParallel as DDP
from transformers import AutoModelForCausalLM, AutoTokenizer

def setup():
    # Try to get the world size and rank from different environment variables
    world_size = int(os.environ.get('SLURM_NTASKS', os.environ.get('SLURM_NPROCS', '1')))
    rank = int(os.environ.get('SLURM_PROCID', '0'))
    
    # Get the node list and use the first node as the master address
    nodes = os.environ.get('SLURM_NODELIST', 'localhost')
    if '[' in nodes:
        master_addr = nodes.split('[')[0] + nodes.split('[')[1].split(',')[0].split('-')[0]
    else:
        master_addr = nodes.split(',')[0]

    os.environ['MASTER_ADDR'] = master_addr
    os.environ['MASTER_PORT'] = '29500'
    os.environ['WORLD_SIZE'] = str(world_size)
    os.environ['RANK'] = str(rank)

    # Initialize the process group
    dist.init_process_group("nccl", rank=rank, world_size=world_size)
    return rank, world_size

def cleanup():
    dist.destroy_process_group()

def run():
    rank, world_size = setup()

    # Print GPU information
    print(f"Process {rank} of {world_size} using GPU: {torch.cuda.get_device_name(rank)}")

    model_id = "mistralai/Mixtral-8x22B-Instruct-v0.1"
    tokenizer = AutoTokenizer.from_pretrained(model_id)
    model = AutoModelForCausalLM.from_pretrained(model_id, torch_dtype=torch.float16).to(rank)
    model = DDP(model, device_ids=[rank])
    model.gradient_checkpointing_enable()

    conversation = [
        {"role": "user", "content": "What's the weather like in Paris?"},
        {
            "role": "tool_calls",
            "content": [
                {
                    "name": "get_current_weather",
                    "arguments": {"location": "Paris, France", "format": "celsius"},
                }
            ]
        },
        {"role": "tool_results", "content": {"content": 22}},
        {"role": "assistant", "content": "The current temperature in Paris, France is 22 degrees Celsius."},
        {"role": "user", "content": "What about San Francisco?"}
    ]

    tools = [{
        "type": "function",
        "function": {
            "name":"get_current_weather",
            "description": "Get the current weather",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {"type": "string", "description": "The city and state, e.g. San Francisco, CA"},
                    "format": {"type": "string", "enum": ["celsius", "fahrenheit"], "description": "The temperature unit to use. Infer this from the users location."}
                },
                "required":["location","format"]
            }
        }
    }]

    tool_use_prompt = tokenizer.apply_chat_template(
        conversation,
        chat_template="tool_use",
        tools=tools,
        tokenize=False,
        add_generation_prompt=True,
    )

    inputs = tokenizer(tool_use_prompt, return_tensors="pt").to(rank)

    with torch.cuda.amp.autocast():
        outputs = model.module.generate(**inputs, max_new_tokens=20)

    if rank == 0:
        print(tokenizer.decode(outputs[0], skip_special_tokens=True))

    cleanup()

if __name__ == "__main__":
    run()