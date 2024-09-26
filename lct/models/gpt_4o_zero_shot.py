import os
import tiktoken
import transformers
from helper_functions import *
from openai import OpenAI
import time  

batch_path = "modelle_prompt2" 
model_name = "GPT-4o"

client = OpenAI(
  api_key='sk-proj-HyHBjQ17zJgYhbn4HYooT3BlbkFJqChjIl1UUqCcBE4GSePi',
  #organization='$org-gd7cNf2GXYihWhZKxOmQyJpw',
  #project='$proj_tCdOTjZHERlqndZpJtHhQ32C',
)

transform_lct = "/work/eauten2s/ec_criteria_struct/lct"
model_desc = read_text_file(f"{transform_lct}/input/prompt/agent.txt") 
command = read_text_file(f"{transform_lct}/input/prompt/p6.txt")

study_path = f"{transform_lct}/input/dataset/test/input/"
output_path = f"{transform_lct}/evaluate_parse_1/{batch_path}/model_output/{model_name}_0_shot_new2/output/"  
os.makedirs(output_path, exist_ok=True)

study_files = os.listdir(study_path)

messages = []
messages.append({"role": "system", "content": f"{command}"})
first_call = True

# Startzeit messen
start_time = time.time()

for file in study_files:
    file_name = file.split(".")[0]
    print("File:", file_name, "\n")
    
    test_file = read_text_file(study_path + file)

    if first_call:
        messages.append({"role": "user", "content": f"{command} {test_file}"})
        first_call = False
    else:
        messages[-1] = {"role": "user", "content": f"{command} {test_file}"} 

    completion = client.chat.completions.create(
        model="gpt-4o",  # "gpt-4o" "gpt-3.5-turbo" "gpt-4o-mini"
        messages=messages,
        #temperature=0.5,
    )
    gen_output = completion.choices[0].message
    gen_output = gen_output.content
    print(gen_output)

    save_txt(gen_output, f"{output_path}{model_name}_{file_name}_0_shot.txt")

# Endzeit messen und benötigte Zeit berechnen
end_time = time.time()
elapsed_time = end_time - start_time
print(f"Benötigte Zeit: {elapsed_time / 3600:.2f} Stunden")
