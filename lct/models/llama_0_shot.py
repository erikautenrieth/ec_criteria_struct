import os
import transformers
from helper_functions import *

batch_path = "eval_p1"
transform_lct ="/work/eauten2s/ec_criteria_struct/lct"

# Model
model_id =  "meta-llama/Meta-Llama-3-8B-Instruct"
model_name = "Llama-3-8B-Instruct"

temp=0.9
temp_str=str(temp).split(".")[1]
# Input/ Output
study_path = f"{transform_lct}/input/lct_txt/"
output_path = f"{transform_lct}/evaluate/{batch_path}/model_output/{model_name}_0_shot_tmp_{temp_str}/output/"
os.makedirs(output_path, exist_ok=True)

# Load Prediction Files
study_files = os.listdir(study_path)

# Load Model Description
model_desc = read_text_file(f"{transform_lct}/input/prompt/prompt2.txt")
messages = []

command = "Insert the logical operators [AND], [OR], [NOT] into the following eligibility criteria and return the text in full without deleting/replacing anything:"


print("Hier fängt die Pipeline an")
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
    {"role": "user", "content": f"{command} {test_file}"},
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
            max_new_tokens=2000,
            eos_token_id=terminators,
            do_sample=True,
            temperature=temp,# 0.6 deterministich - kreativ
            top_p=0.9,
    )

    gen_output = outputs[0]["generated_text"][len(prompt):]
   
    #print(f"\n {model_name} Output: \n  {gen_output} \n")
    
    save_txt(gen_output, f"{output_path}{model_name}_{file_name}_0_shot.txt")
