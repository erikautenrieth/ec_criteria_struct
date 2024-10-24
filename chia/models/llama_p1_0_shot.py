import os
import transformers
import torch
from helper_functions import *

batch_path = "eval_full_chia" 

model_id =  "meta-llama/Meta-Llama-3-70B-Instruct"
model_name = "Llama-3-70B-Instruct"

transform ="/work/eauten2s/ec_criteria_struct/chia"
study_path = f"{transform}/input/chia_text_full/"
output_path = f"{transform}/evaluate/{batch_path}/model_output/{model_name}_0_shot_lct_prompt/output/"
os.makedirs(output_path, exist_ok=True)
study_files = os.listdir(study_path)
model_desc = read_text_file(f"{transform}/input/prompt/lct_p2.txt") # lct_p2.txt # chia_p2.txt
messages = []


pipeline = transformers.pipeline(
            "text-generation",
            model=model_id,
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
    {"role": "user", "content": f"{model_desc} {test_file}"},
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
            temperature=0.5,
            top_p=0.95,
    )

    gen_output = outputs[0]["generated_text"][len(prompt):]

    
    save_txt(gen_output, f"{output_path}{model_name}_{file_name}_0_shot.txt")
