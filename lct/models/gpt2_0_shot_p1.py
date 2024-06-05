import os
import torch
import transformers
from helper_functions import *

batch_path = "eval_p1"
model_id = "openai-community/gpt2-xl"
model_name = "gpt2-xl"

temp = 0.6
n_prompt = 1

transform_lct = "/work/eauten2s/ec_criteria_struct/lct"
study_path = f"{transform_lct}/input/lct_txt/"
output_path = f"{transform_lct}/evaluate/{batch_path}/model_output/{model_name}_0_shot_prompt_{n_prompt}/output/"
os.makedirs(output_path, exist_ok=True)

study_files = os.listdir(study_path)[:100]

model_desc = read_text_file(f"{transform_lct}/input/prompt/p{n_prompt}.txt")
command = "Insert the logical operators [AND], [OR], [NOT] into the following eligibility criteria and return the text in full without deleting/replacing anything:"

print("Hier fängt die Pipeline an")
pipeline = transformers.pipeline(
    "text-generation",
    model=model_id,
    device_map="auto",
)

for file in study_files:
    file_name = file.split(".")[0]
    print("File:", file_name, "\n")
    
    test_file = read_text_file(study_path + file)

    messages = [
        {"role": "system", "content": model_desc},
        {"role": "user", "content": f"{command} {test_file}"},
    ]

    # Convert messages to a single string as input for the tokenizer
    prompt = " ".join([msg["content"] for msg in messages])

    # Tokenize the prompt
    tokenized_input = pipeline.tokenizer(
        prompt, 
        return_tensors='pt', 
        padding=True, 
        truncation=True
    )

    outputs = pipeline(
        input_ids=tokenized_input.input_ids,
        max_new_tokens=2048,
        do_sample=True,
        temperature=temp,
        top_p=0.95,
    )

    gen_output = outputs[0]["generated_text"][len(pipeline.tokenizer.decode(tokenized_input.input_ids[0])):]
    
    save_txt(gen_output, f"{output_path}{model_name}_{file_name}_0_shot.txt")
