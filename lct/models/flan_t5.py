import os
from transformers import T5Tokenizer, T5ForConditionalGeneration
device = "cuda" # the device to load the model onto
from helper_functions import *

batch_path = "eval_p1"
n_prompt = 1
n_shot = 2


temp_str = "" # temp_str = f"_temp_{str(temp).split('.')[1]}"   temp = 0.6
cot_true = "_p5" # "_cot"
random_shot =""  # "_random"


model_name = "flan-t5"



transform_lct ="/work/eauten2s/ec_criteria_struct/lct"


model_desc = read_text_file(f"{transform_lct}/input/prompt/p{n_prompt}.txt") #  p{n_prompt}

study_path = f"{transform_lct}/input/lct_txt/"
output_path = f"{transform_lct}/evaluate/{batch_path}/model_output/{model_name}_{n_shot}{random_shot}_shot_prompt_{n_prompt}{temp_str}{cot_true}/output/"
os.makedirs(output_path, exist_ok=True)


study_files = os.listdir(study_path)[:100]

shot_list = [
    "NCT03865433.txt",
    "NCT03860324.txt",
    "NCT03860233.txt",
    "NCT03923231.txt",
    "NCT03930121.txt"
]


# Load n-shot Data
study_folder = f"{transform_lct}/input/lct_txt/"
label_folder = f'{transform_lct}/input/lct_p1'
study_filenames, study_contents, label_filenames, label_contents = read_matching_txt_files(study_folder, label_folder, shot_list)

## Random n-shot Data
#study_filenames, study_contents, label_filenames, label_contents = read_random_matching_txt_files(study_folder, label_folder, n_shot)

studies = dict(zip(study_filenames, study_contents))
labels = dict(zip(label_filenames, label_contents))
messages = []

cot = "Let's think through this carefully, step by step:"
#command = "Insert the logical operators [AND], [OR], [NOT] into the following eligibility criteria and return the text in full without deleting/replacing anything. Do not say anything else." 

command = read_text_file(f"{transform_lct}/input/prompt/p5.txt")
messages.append({"role": "system", "content": f"{model_desc}"})

for i in range(n_shot):
    messages.append({"role": "user", "content": f"{command} {studies[study_filenames[i]]}"})
    messages.append({"role": "assistant", "content": labels[label_filenames[i]]})


tokenizer = T5Tokenizer.from_pretrained("google/flan-t5-xxl")
model = T5ForConditionalGeneration.from_pretrained("google/flan-t5-xxl", device_map="auto")

first_call = True

for file in study_files:
    file_name = file.split(".")[0]
    print("File:", file_name, "\n")
    
    test_file = read_text_file(study_path+file)

    if first_call:
        messages.append({"role": "user", "content": f"{command} {test_file}"})
        first_call = False
    else:
        messages[-1] = {"role": "user", "content": f"{command} {test_file}"} # {cot} 


    input_ids = tokenizer(messages, return_tensors="pt").input_ids.to("cuda")

    outputs = model.generate(input_ids)

    save_txt(outputs, f"{output_path}{model_name}_{file_name}_{n_shot}_shot.txt")
