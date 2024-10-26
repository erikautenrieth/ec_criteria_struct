import anthropic
from helper_functions import *
import os

batch_path = "eval/evaluate_txt"
n_prompt = 6
n_shot = 10
model_name = "Claude-3.5-Sonnet"

transform_lct ="/work/eauten2s/ec_criteria_struct/lct"
model_desc = read_text_file(f"{transform_lct}/input/prompt/claude_p2_10shot.txt") 
study_path = f"{transform_lct}/input/dataset/test/input/"
output_path = f"{transform_lct}/evaluate_parse_1/{batch_path}/model_output/{model_name}_{n_shot}_shot_temp_0.5/output/"
os.makedirs(output_path, exist_ok=True)
study_files = os.listdir(study_path)

client = anthropic.Anthropic(
    api_key="INSERT_API_KEY", #os.getenv("ANTHROPIC_API_KEY")
)

for file in study_files:
    file_name = file.split(".")[0]
    test_file = read_text_file(study_path+file)
    message = client.messages.create(
        model="claude-3-5-sonnet-20240620",  # "claude-3-opus-20240229",
        max_tokens=3000,
        temperature=0.5,
        system=model_desc,
        messages=[
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text":  model_desc + test_file
                    }
                ]
            }
        ]
    )
    print(message.content[0].text)
    save_txt(message.content[0].text, f"{output_path}{model_name}_{file_name}_{n_shot}_shot.txt")