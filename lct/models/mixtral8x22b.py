from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

def get_available_resources():
    # Check for available GPUs
    if torch.cuda.is_available():
        num_gpus = torch.cuda.device_count()
        gpus_info = []
        for i in range(num_gpus):
            gpu_info = {
                'gpu_id': i,
                'name': torch.cuda.get_device_name(i),
                'total_memory_gb': torch.cuda.get_device_properties(i).total_memory / (1024 ** 3)
            }
            gpus_info.append(gpu_info)
    else:
        num_gpus = 0
        gpus_info = []

    return {
        'num_gpus': num_gpus,
        'gpus_info': gpus_info
    }


resources = get_available_resources()

print(f"Anzahl der verfügbaren GPUs: {resources['num_gpus']}")
for gpu in resources['gpus_info']:
    print(f"GPU {gpu['gpu_id']}: {gpu['name']} mit {gpu['total_memory_gb']:.2f} GB RAM")


model_id = "mistralai/Mixtral-8x22B-Instruct-v0.1"

tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(model_id, torch_dtype=torch.float16).to("cuda")
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
    {
        "role": "tool_results",
        "content": {"content": 22}
    },
    {"role": "assistant", "content": "The current temperature in Paris, France is 22 degrees Celsius."},
    {"role": "user", "content": "What about San Francisco?"}
]

tools = [{"type": "function", "function": {"name":"get_current_weather", "description": "Get the current weather", "parameters": {"type": "object", "properties": {"location": {"type": "string", "description": "The city and state, e.g. San Francisco, CA"}, "format": {"type": "string", "enum": ["celsius", "fahrenheit"], "description": "The temperature unit to use. Infer this from the users location."}},"required":["location","format"]}}}]

tool_use_prompt = tokenizer.apply_chat_template(
    conversation,
    chat_template="tool_use",
    tools=tools,
    tokenize=False,
    add_generation_prompt=True,
)

inputs = tokenizer(tool_use_prompt, return_tensors="pt").to("cuda")

with torch.cuda.amp.autocast():
    outputs = model.generate(**inputs, max_new_tokens=20)

print(tokenizer.decode(outputs[0], skip_special_tokens=True))
