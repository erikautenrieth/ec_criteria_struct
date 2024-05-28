import os
import transformers
from helper_functions import *

batch_path = "batch1"
transform_chia ="/work/eauten2s/ec_criteria_struct/chia"

# Model
model_id =  "meta-llama/Meta-Llama-3-8B-Instruct"
model_name = "Llama-3-8B-Instruct"
# N Shots
n_shot = 5 # liefert genau die Anzahl Beispiele (study, label)

# Input/ Output
study_path = f"{transform_chia}/input/half_clinical_trials/"
output_path = f"{transform_chia}/evaluate/{batch_path}/model_output/{model_name}_{n_shot}_shot/output/"
os.makedirs(output_path, exist_ok=True)

# Load Prediction Files
anfang = n_shot 
ende = 300 + n_shot
study_files = os.listdir(study_path)[anfang:ende]  


# Load Model Description
model_desc = read_text_file(f"{transform_chia}/chia_label/prompts/model_desc_p2.txt")


# Load n-shot Data
study_folder = f"{transform_chia}/input/half_clinical_trials/" 
label_folder = f'{transform_chia}/chia_label/p2_model_input'
study_filenames, study_contents, label_filenames, label_contents = read_matching_txt_files(study_folder, label_folder, n_shot)
studies = dict(zip(study_filenames, study_contents))
labels = dict(zip(label_filenames, label_contents))
messages = []

command = "bring the following criterias in JSON format with logical operators, only return JSON:"

messages.append({"role": "system", "content": f"{model_desc}"})

for i in range(n_shot):
    messages.append({"role": "user", "content": f"{command} {studies[study_filenames[i]]}"})
    messages.append({"role": "assistant", "content": labels[label_filenames[i]]})


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

    if first_call:
        messages.append({"role": "user", "content": f"{command} {test_file}"})
        first_call = False
    else:
        messages[-1] = {"role": "user", "content": f"{command} {test_file}"}


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
            max_new_tokens=2000,# 500 (LLama3), 256 (BIoLLama)
            eos_token_id=terminators,
            do_sample=True,
            temperature=0.5,# 0.6 deterministich - kreativ
            top_p=0.9,
    )

    gen_output = outputs[0]["generated_text"][len(prompt):]
   
    #print(f"\n {model_name} Output: \n  {gen_output} \n")
    
    save_json(gen_output, f"{output_path}{model_name}_{file_name}_{n_shot}_shot.json")
