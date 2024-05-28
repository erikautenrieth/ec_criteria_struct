import os
import transformers
import torch
from helper_functions import read_text_file, read_matching_txt_files, save_txt

batch_path = "eval_p1_2"
transform_lct = "/work/eauten2s/ec_criteria_struct/lct"

# Model
model_id = "tiiuae/falcon-180b"  # Verwende das angegebene Modell
model_name = "Falcon-180B"
# N Shots
n_shot = 3  # liefert genau die Anzahl Beispiele (study, label)

# Input/ Output
study_path = f"{transform_lct}/input/lct_txt/"
output_path = f"{transform_lct}/evaluate/{batch_path}/model_output/{model_name}_{n_shot}_shot/output/"
os.makedirs(output_path, exist_ok=True)

# Load Prediction Files
anfang = 0
ende = 300 
study_files = os.listdir(study_path)[anfang:ende]

# Load Model Description
model_desc = read_text_file(f"{transform_lct}/input/prompt/prompt2.txt")

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
studies = dict(zip(study_filenames, study_contents))
labels = dict(zip(label_filenames, label_contents))
messages = []

command = "Insert the logical operators [AND], [OR], [NOT] into the following eligibility criteria and return the text in full without deleting/replacing anything:"

messages.append({"role": "system", "content": f"{model_desc}"})

for i in range(n_shot):
    messages.append({"role": "user", "content": f"{command} {studies[study_filenames[i]]}"})
    messages.append({"role": "assistant", "content": labels[label_filenames[i]]})

print("Hier fängt die Pipeline an")
pipeline = transformers.pipeline(
    "text-generation",
    model=model_id,
    tokenizer=transformers.AutoTokenizer.from_pretrained(model_id),
    torch_dtype=torch.bfloat16,
    trust_remote_code=True,
    device_map="auto",
)

first_call = True

for file in study_files:
    file_name = file.split(".")[0]
    print("File:", file_name, "\n")
    
    test_file = read_text_file(study_path + file)

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

    # Checke die Tokens
    max_length = pipeline.model.config.max_length
    prompt_length = len(pipeline.tokenizer(prompt)['input_ids'])
    max_new_tokens = max_length - prompt_length
    max_new_tokens = max(0, max_new_tokens)
    print(max_new_tokens)


    outputs = pipeline(
        prompt,
        max_new_tokens=2048,
        eos_token_id=pipeline.tokenizer.eos_token_id,
        do_sample=True,
        temperature=0.6,  # 0.6 deterministich - kreativ
        top_p=0.95,
    )

    gen_output = outputs[0]["generated_text"][len(prompt):]
   
    save_txt(gen_output, f"{output_path}{model_name}_{file_name}_{n_shot}_shot.txt")
