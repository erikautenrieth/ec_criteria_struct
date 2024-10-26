import os
import argparse
import transformers
import torch
import os
import transformers
from datetime import timedelta

def read_text_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
        if content:
            print(f"Das File: {file_path} wurde erfolgreich geladen.")
            return content
        else:
            return "Keine Daten vorhanden."
        
def save_txt(data, file_path):
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(data)


parser = argparse.ArgumentParser()
parser.add_argument("--model", type=str)
args = parser.parse_args()
model_name = args.model

transform_lct ="/work/eauten2s/ec_criteria_struct/lct"
study_path = f"{transform_lct}/input/dataset/test/input/"
model_desc = read_text_file(f"{transform_lct}/input/prompt/p2.txt") 
output_path = f"{transform_lct}/evalate_txt/model_output/{model_name}_0_shot_prompt_2/output/"
os.makedirs(output_path, exist_ok=True)
study_files = os.listdir(study_path)

messages = []


print("Hier fängt die Pipeline an")
pipeline = transformers.pipeline(
            "text-generation",
            model=model_name,
            model_kwargs={"torch_dtype": torch.bfloat16},
            device_map="auto", 
        )

first_call = True

for file in study_files:
    file_name = file.split(".")[0]
    print("File:", file_name, "\n")
    
    test_file = read_text_file(study_path+file)

    messages = [
    {"role": "system", "content": f"{model_desc}"},
    {"role": "user", "content": f"{model_desc}{test_file}"}, 
    ]

    prompt = pipeline.tokenizer.apply_chat_template(
                messages, 
                tokenize=False, 
                add_generation_prompt=True
    )

    terminators = [
            pipeline.tokenizer.eos_token_id,
            pipeline.tokenizer.convert_tokens_to_ids("<|eot_id|>")
    ]


    outputs = pipeline(
            prompt,
            max_new_tokens=2048,
            eos_token_id=terminators,
            do_sample=True,
            temperature=.5,
            top_p=0.95,
    )

    gen_output = outputs[0]["generated_text"][len(prompt):]
    save_txt(gen_output, f"{output_path}{model_name}_{file_name}_0_shot.txt")
