from helper_functions import *
from openai import OpenAI
import os
import time  


batch_path = "eval/evaluate_txt"
n_shot = 5
model_name = "GPT-4o"

client = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY"),
)

transform_lct ="/work/eauten2s/ec_criteria_struct/lct"
model_desc = read_text_file(f"{transform_lct}/input/prompt/agent.txt") 
command = read_text_file(f"{transform_lct}/input/prompt/p6.txt")
study_path = f"{transform_lct}/input/dataset/test/input/"
output_path = f"{transform_lct}/evaluate_parse_1/{batch_path}/model_output/{model_name}_{n_shot}_shot_t_default/output/"  
os.makedirs(output_path, exist_ok=True)
study_files = os.listdir(study_path)

shot_list = [
    "NCT03861156.txt",
    "NCT03861559.txt",
    "NCT03863613.txt",
    "NCT03865433.txt",
    "NCT03865771.txt"
]


study_folder = f"{transform_lct}/input/lct_txt/"
label_folder = f'{transform_lct}/input/lct_p1'
study_filenames, study_contents, label_filenames, label_contents = read_matching_txt_files(study_folder, label_folder, shot_list)
studies = dict(zip(study_filenames, study_contents))
labels = dict(zip(label_filenames, label_contents))
messages = []
messages.append({"role": "system", "content": f"{command}"})

for i in range(n_shot):
    messages.append({"role": "user", "content": f"{command} {studies[study_filenames[i]]}"})
    messages.append({"role": "assistant", "content": labels[label_filenames[i]]})

first_call = True
start_time = time.time()
for file in study_files:
    file_name = file.split(".")[0]
    print("File:", file_name, "\n")
    test_file = read_text_file(study_path+file)
    if first_call:
        messages.append({"role": "user", "content": f"{command} {test_file}"})
        first_call = False
    else:
        messages[-1] = {"role": "user", "content": f"{command} {test_file}"} 

    completion = client.chat.completions.create(
    model="gpt-4o",      # "gpt-4o" "gpt-3.5-turbo" "gpt-4o-mini"
    messages=messages,
    #temperature=0.5,
    )
    gen_output = completion.choices[0].message
    gen_output = gen_output.content
    print(gen_output)
    save_txt(gen_output, f"{output_path}{model_name}_{file_name}_{n_shot}_shot.txt")

end_time = time.time()
elapsed_time = end_time - start_time
print(f"Benötigte Zeit: {elapsed_time / 3600:.2f} Stunden")