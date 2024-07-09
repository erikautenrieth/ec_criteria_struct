from transformers import AutoTokenizer, AutoModelForCausalLM
import transformers
import torch
from helper_functions import *
import re

batch_path = "eval_p1_models_prompt6_evaldata"

model_name = "Gemma-27b"
model_id = "google/gemma-2-27b-it"
dtype = torch.bfloat16

n_prompt = 6
n_shot = 5


transform_lct ="/work/eauten2s/ec_criteria_struct/lct"
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

study_folder = f"{transform_lct}/input/lct_txt/"
label_folder = f'{transform_lct}/input/lct_p1'
study_filenames, study_contents, label_filenames, label_contents = read_matching_txt_files(study_folder, label_folder, shot_list)
studies = dict(zip(study_filenames, study_contents))
labels = dict(zip(label_filenames, label_contents))
command = read_text_file(f"{transform_lct}/input/prompt/claude_prompt6.txt")


tokenizer = AutoTokenizer.from_pretrained(model_id)

model = AutoModelForCausalLM.from_pretrained(
    model_id,
    device_map="cuda",
    torch_dtype=dtype,
)

first_call = True

for file in study_files:
    file_name = file.split(".")[0]
    print("File:", file_name, "\n")
    
    test_file = read_text_file(study_path+file)
    messages = [{"role": "user", "content": f"{command}{test_file}"}]

    prompt = tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)

    inputs = tokenizer.encode(prompt, add_special_tokens=False, return_tensors="pt")
    outputs = model.generate(input_ids=inputs.to(model.device), max_new_tokens=2048, temperature=0.5,top_p=0.95)
    output = tokenizer.decode(outputs[0])
    #start_tag, end_tag = "<start_of_turn>model", "<end_of_turn>"
    #start_tag, end_tag = "<EDITED_CRITERIA>", "</EDITED_CRITERIA>"
    start_tag, end_tag = "<start_of_turn>model\n<EDITED_CRITERIA>", "</EDITED_CRITERIA>"
    extracted_text = re.search(f"{start_tag}(.*?){end_tag}", output, re.DOTALL).group(1).strip()
    
    print(extracted_text)

    save_txt(extracted_text, f"{output_path}{model_name}_{file_name}_{n_shot}_shot.txt")
