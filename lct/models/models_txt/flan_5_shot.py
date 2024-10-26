import os
import transformers
from helper_functions import *
import time
from datetime import timedelta
from transformers import T5ForConditionalGeneration, AutoTokenizer
import torch

start_time = time.time()

batch_path = "modelle_prompt2"

model_id =  "google/flan-ul2"
model_name = "flan-ul2"

transform_lct ="/work/eauten2s/ec_criteria_struct/lct"

command = read_text_file(f"{transform_lct}/input/prompt/claude_p2_5shot.txt")

study_path = f"{transform_lct}/input/dataset/test/input/"
output_path = f"{transform_lct}/evaluate_parse_1/{batch_path}/model_output/{model_name}_5_shot/output/"
os.makedirs(output_path, exist_ok=True)

study_files = os.listdir(study_path)


model = T5ForConditionalGeneration.from_pretrained("google/flan-ul2", device_map="auto", load_in_8bit=True)                                                                 
tokenizer = AutoTokenizer.from_pretrained("google/flan-ul2")

first_call = True

for file in study_files:
    file_name = file.split(".")[0]
    print("File:", file_name, "\n")
    
    test_file = read_text_file(study_path+file)

    input_string = command + test_file
    inputs = tokenizer(input_string, return_tensors="pt").input_ids.to("cuda")
    outputs = model.generate(inputs, max_length=2048)
    out = tokenizer.decode(outputs[0])
    print(out)
    save_txt(out, f"{output_path}{model_name}_{file_name}_5_shot.txt")



end_time = time.time()
execution_time = end_time - start_time
time_delta = timedelta(seconds=int(execution_time))
hours, remainder = divmod(time_delta.seconds, 3600)
minutes, _ = divmod(remainder, 60)

print(f"Total execution time: {hours:02d}:{minutes:02d}")