import tiktoken
from helper_functions import *
from openai import OpenAI

batch_path = "eval/evaluate_json"
n_shot = 5

model_name = f"GPT-4o_{n_shot}_shot"

client = OpenAI(
  api_key='INSERT_API_KEY_HERE',
)

transform_lct ="/work/eauten2s/ec_criteria_struct/lct"
model_desc = read_text_file(f"{transform_lct}/input/prompt/all_entitys_prompt1.txt")
command = "Structure the eligibility criteria based on the system input in JSON and extract the entities."
study_path = f"{transform_lct}/input/dataset_p4_prompt1_new/test/input/"
output_path = f"{transform_lct}/evaluate_struct/{batch_path}/model_output/{model_name}/output/"
os.makedirs(output_path, exist_ok=True)
study_files = os.listdir(study_path)


short_files = [
"NCT03860714_inc.txt",
"NCT03860012_exc.txt",
"NCT03860090_exc.txt",
"NCT03863756_exc.txt",
"NCT03926949_inc.txt",
"NCT03868865_exc.txt",
"NCT03867422_inc.txt",
"NCT03864653_exc.txt",
"NCT03922269_inc.txt",
"NCT03921138_exc.txt",
'NCT03860025_inc.txt',
'NCT03861221_inc.txt',
'NCT03861286_inc.txt',
'NCT03860779_inc.txt',
'NCT03860493_exc.txt',
'NCT03861689_inc.txt',
'NCT03863223_inc.txt',
'NCT03861078_exc.txt',
'NCT03863548_inc.txt',
'NCT03863873_inc.txt',
'NCT03864315_inc.txt',
'NCT03864549_inc.txt',
'NCT03864874_exc.txt',
'NCT03864770_inc.txt',
'NCT03864094_inc.txt',
'NCT03864991_inc.txt'
]


study_folder = f"{transform_lct}/input/dataset_p4_prompt1_new/train/input/"
label_folder = f"{transform_lct}/input/dataset_p4_prompt1_new/train/output/"
study_filenames, study_contents, label_filenames, label_contents = read_matching_txt_files(study_folder, label_folder, short_files)
studies = dict(zip(study_filenames, study_contents))
labels = dict(zip(label_filenames, label_contents))
messages = []
messages.append({"role": "system", "content": f"{model_desc}"})

for i in range(n_shot):
    messages.append({"role": "user", "content": f"{command} {studies[study_filenames[i]]}"})
    messages.append({"role": "assistant", "content": labels[label_filenames[i]]})

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

    completion = client.chat.completions.create(
    model="gpt-4o",# "gpt-4o-mini", "gpt-3.5-turbo",
    messages=messages,
    temperature=0.5,
    )
    gen_output = completion.choices[0].message
    gen_output = gen_output.content
    print(gen_output)
    save_json(gen_output, f"{output_path}{model_name}_{file_name}.json")

