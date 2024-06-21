import os
import transformers
import torch
from transformers import AutoModelForCausalLM, AutoTokenizer, pipeline
from helper_functions import *

batch_path = "eval_p1"

model_id =  "microsoft/Phi-3-mini-128k-instruct"
model_name = "Phi-3"

n_prompt = 1

transform_lct ="/work/eauten2s/ec_criteria_struct/lct"
study_path = f"{transform_lct}/input/lct_txt/"
output_path = f"{transform_lct}/evaluate/{batch_path}/model_output/{model_name}_0_shot_prompt_{n_prompt}/output/"
os.makedirs(output_path, exist_ok=True)

study_files = os.listdir(study_path)[:100]


model_desc = read_text_file(f"{transform_lct}/input/prompt/p{n_prompt}.txt")
messages = []

command = "Insert the logical operators [AND], [OR], [NOT] into the following eligibility criteria and return the text in full without deleting/replacing anything, the operators must be in [] brackets:"


model = AutoModelForCausalLM.from_pretrained(
    "microsoft/Phi-3-mini-128k-instruct", 
    device_map="auto", # cuda
    torch_dtype="auto", 
    trust_remote_code=True, 
)
tokenizer = AutoTokenizer.from_pretrained("microsoft/Phi-3-mini-128k-instruct")

first_call = True

for file in study_files:
    file_name = file.split(".")[0]
    print("File:", file_name, "\n")
    
    test_file = read_text_file(study_path+file)

    messages = [
    {"role": "system", "content": f"{model_desc}"},
    {"role": "user", "content": f"{command} {test_file}"},
    ]

    pipe = pipeline(
    "text-generation",
    model=model,
    tokenizer=tokenizer,
    )

    generation_args = {
    "max_new_tokens": 2000,
    "return_full_text": False,
    "temperature": 0.6,
    "do_sample": False,
    }
    output = pipe(messages, **generation_args)
    gen_output = output[0]['generated_text']

    save_txt(gen_output, f"{output_path}{model_name}_{file_name}_0_shot.txt")
