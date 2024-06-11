import anthropic
from helper_functions import *
import os

batch_path = "eval_p1_n_shot"
n_prompt = 6
n_shot = 5
temp_str = "" # temp_str = f"_temp_{str(temp).split('.')[1]}"   temp = 0.6
cot_true = "" # "_cot"
model_name = "Claude-3-Opus"


transform_lct ="/work/eauten2s/ec_criteria_struct/lct"
model_desc = read_text_file(f"{transform_lct}/input/prompt/p{n_prompt}.txt")
study_path = f"{transform_lct}/input/lct_txt/"
output_path = f"{transform_lct}/evaluate/{batch_path}/model_output/{model_name}_{n_shot}_shot_prompt_{n_prompt}{temp_str}{cot_true}/output/"
os.makedirs(output_path, exist_ok=True)

study_files = os.listdir(study_path)[:3]

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

cot = "Let's think through this carefully, step by step."

command = "Insert the logical operators [AND], [OR], [NOT] into the following eligibility criteria and return the text in full without deleting/replacing anything. Do not say anything else."


client = anthropic.Anthropic(
    # defaults to os.environ.get("ANTHROPIC_API_KEY")
    api_key="my_api_key",
)

for file in study_files:
    file_name = file.split(".")[0]

    test_file = read_text_file(study_path+file)

    message = client.messages.create(
        model="claude-3-opus-20240229",
        max_tokens=3000,
        temperature=0,
        system=model_desc,
        messages=[
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": test_file
                    }
                ]
            }
        ]
    )
    print(message.content)
    save_txt(message.content, f"{output_path}{model_name}_{file_name}_{n_shot}_shot.txt")


