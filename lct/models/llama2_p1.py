import os
import transformers
from helper_functions import *

batch_path = "eval_p1_n_shot_modelle_prompt6_temperatur5"
n_prompt = 6
n_shot = 3

model_id =  "meta-llama/Llama-2-70b-chat-hf"
model_name = "Llama-2-70B"

transform_lct ="/work/eauten2s/ec_criteria_struct/lct"


model_desc = read_text_file(f"{transform_lct}/input/prompt/p{n_prompt}.txt") 

study_path = f"{transform_lct}/input/lct_txt/"
output_path = f"{transform_lct}/evaluate_parse_1/{batch_path}/model_output/{model_name}_{n_shot}_shot/output/"

os.makedirs(output_path, exist_ok=True)


study_files = os.listdir(study_path)[:50]


## Nur 3- Shot möglich
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
command = read_text_file(f"{transform_lct}/input/prompt/p6.txt")
messages.append({"role": "system", "content": f"{model_desc}"})

for i in range(n_shot):
    messages.append({"role": "user", "content": f"{command} {studies[study_filenames[i]]}"})
    messages.append({"role": "assistant", "content": labels[label_filenames[i]]})


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


    outputs = pipeline(
            prompt,
            max_new_tokens=2048,
            eos_token_id=pipeline.tokenizer.eos_token_id,
            do_sample=True,
            temperature=0.5,
            top_p=0.95,
    )

    gen_output = outputs[0]["generated_text"][len(prompt):]

    save_txt(gen_output, f"{output_path}{model_name}_{file_name}_{n_shot}_shot.txt")
