from transformers import AutoModelForCausalLM, AutoTokenizer

model_id = "mistralai/Mixtral-8x22B-Instruct-v0.1"
tokenizer = AutoTokenizer.from_pretrained(model_id)
conversation=[
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


tools = [{"type": "function", "function": {"name":"get_current_weather", "description": "Get▁the▁current▁weather", "parameters": {"type": "object", "properties": {"location": {"type": "string", "description": "The city and state, e.g. San Francisco, CA"}, "format": {"type": "string", "enum": ["celsius", "fahrenheit"], "description": "The temperature unit to use. Infer this from the users location."}},"required":["location","format"]}}}]

# render the tool use prompt as a string:
tool_use_prompt = tokenizer.apply_chat_template(
            conversation,
            chat_template="tool_use",
            tools=tools,
            tokenize=False,
            add_generation_prompt=True,

)
model = AutoModelForCausalLM.from_pretrained("mistralai/Mixtral-8x22B-Instruct-v0.1")

inputs = tokenizer(tool_use_prompt, return_tensors="pt")

outputs = model.generate(**inputs, max_new_tokens=20)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))
