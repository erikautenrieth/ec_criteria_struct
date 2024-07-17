import os
import transformers
from transformers import AutoModelForCausalLM, AutoTokenizer
from helper_functions import *


batch_path = "eval_p1_models_prompt6_evaldata"

n_prompt = 6
n_shot = 5

model_id =  "mistralai/Mixtral-8x7B-Instruct-v0.1"
model_name = "Mixtral-8x7B"

transform_lct ="/work/eauten2s/ec_criteria_struct/lct"


model_desc = read_text_file(f"{transform_lct}/input/prompt/p{n_prompt}.txt") 
command = read_text_file(f"{transform_lct}/input/prompt/p{n_prompt}.txt")


study_path = f"{transform_lct}/input/dataset/test/input/"
output_path = f"{transform_lct}/evaluate_parse_1/{batch_path}/model_output/{model_name}_{n_shot}_shot_max_ops/output/"
os.makedirs(output_path, exist_ok=True)
study_files = os.listdir(study_path)

most_operators = [
    "NCT03860857.txt",  # 31 Operatoren
    "NCT03866200.txt",  # 30 Operatoren
    "NCT03861559.txt",  # 29 Operatoren
    "NCT03865589.txt",  # 26 Operatoren
    "NCT03868475.txt"   # 24 Operatoren
]

study_folder = f"{transform_lct}/input/lct_txt/"
label_folder = f'{transform_lct}/input/lct_p1'
study_filenames, study_contents, label_filenames, label_contents = read_matching_txt_files(study_folder, label_folder, most_operators)
studies = dict(zip(study_filenames, study_contents))
labels = dict(zip(label_filenames, label_contents))
messages = []
for i in range(n_shot):
    messages.append({"role": "user", "content": f"{command} {studies[study_filenames[i]]}"})
    messages.append({"role": "assistant", "content": labels[label_filenames[i]]})



tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(model_id, device_map="auto")


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


    inputs = tokenizer.apply_chat_template(messages, return_tensors="pt").to("cuda")

    outputs = model.generate(inputs, max_new_tokens=2048, temperature=0.5, top_p=0.95)
    
    gen_output  = tokenizer.decode(outputs[0], skip_special_tokens=True)




    save_txt(gen_output, f"{output_path}{model_name}_{file_name}_{n_shot}_shot.txt")
