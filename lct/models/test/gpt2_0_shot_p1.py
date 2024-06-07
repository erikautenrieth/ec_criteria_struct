import os
import torch
import transformers
from transformers import GPT2Tokenizer, GPT2Model
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

tokenizer = GPT2Tokenizer.from_pretrained('gpt2-xl')
model = GPT2Model.from_pretrained('gpt2-xl')


for file in study_files:
    file_name = file.split(".")[0]
    print("File:", file_name, "\n")
    
    test_file = read_text_file(study_path + file)

    messages = [
        {"role": "system", "content": model_desc},
        {"role": "user", "content": f"{command} {test_file}"},
    ]

    prompt = " ".join([msg["content"] for msg in messages])

    encoded_input = tokenizer(prompt, return_tensors='pt')
    output = model(**encoded_input)
    
    save_txt(output, f"{output_path}{model_name}_{file_name}_0_shot.txt")
