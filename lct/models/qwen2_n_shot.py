import os
from transformers import AutoModelForCausalLM, AutoTokenizer
device = "cuda" 
from helper_functions import *

batch_path = "modelle_prompt2"
n_shot = 5

model_id =  "Qwen/Qwen2-72B-Instruct"
model_name = "Qwen2-72B"

transform_lct ="/work/eauten2s/ec_criteria_struct/lct"
model_desc = read_text_file(f"{transform_lct}/input/prompt/p6.txt") 

study_path = f"{transform_lct}/input/dataset/test/input/"
output_path = f"{transform_lct}/evaluate_parse_1/{batch_path}/model_output/{model_name}_{n_shot}_shot/output/"
os.makedirs(output_path, exist_ok=True)


study_files = os.listdir(study_path)

shot_list = [
    "NCT03865433.txt",
    "NCT03860324.txt",
    "NCT03860233.txt",
    "NCT03923231.txt",
    "NCT03930121.txt"
]

additional_files = [
    "NCT03865433.txt",
    "NCT03860324.txt",
    "NCT03860233.txt",
    "NCT03923231.txt",
    "NCT03930121.txt",
    "NCT03863717.txt",
    "NCT03863925.txt",
    "NCT03863951.txt",
    "NCT03865134.txt",
    "NCT03868267.txt",
    "NCT03929640.txt",
    "NCT03861845.txt",
    "NCT03921827.txt",
    "NCT03924479.txt",
    "NCT03924102.txt"
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

command = read_text_file(f"{transform_lct}/input/prompt/p6.txt")
messages.append({"role": "system", "content": f"{model_desc}"})

for i in range(n_shot):
    messages.append({"role": "user", "content": f"{command} {studies[study_filenames[i]]}"})
    messages.append({"role": "assistant", "content": labels[label_filenames[i]]})


model = AutoModelForCausalLM.from_pretrained(
    "Qwen/Qwen2-72B-Instruct",
    torch_dtype="auto",
    device_map="auto",
    temperature=0.5,
)

tokenizer = AutoTokenizer.from_pretrained("Qwen/Qwen2-72B-Instruct")
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


    text = tokenizer.apply_chat_template(
    messages,
    tokenize=False,
    add_generation_prompt=True
    )

    model_inputs = tokenizer([text], return_tensors="pt").to(device)

    generated_ids = model.generate(
        model_inputs.input_ids,
        max_new_tokens=2048,
    )
    generated_ids = [
        output_ids[len(input_ids):] for input_ids, output_ids in zip(model_inputs.input_ids, generated_ids)
    ]

    response = tokenizer.batch_decode(generated_ids, skip_special_tokens=True)[0]

    save_txt(response, f"{output_path}{model_name}_{file_name}_{n_shot}_shot.txt")
