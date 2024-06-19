import os
import transformers
from helper_functions import *
from transformers import pipeline, AutoTokenizer, AutoModelForCausalLM

batch_path = "eval_p1_finetuned"
n_prompt = 1
n_shot = 0

temp = 0.6

temp_str =  "" #temp_str = f"_temp_{str(temp).split('.')[1]}"  # temp = 0.6
cot_true = "" # "_cot"
random_shot =""  # "_random"

model_id = "llama3_8b_lora_model"
model_name = "Llama-3-8B-Tuned_LORA"


transform_lct ="/work/eauten2s/ec_criteria_struct/lct"
model_desc = read_text_file(f"{transform_lct}/input/prompt/p{n_prompt}.txt") #  p{n_prompt} agent
study_path = f"{transform_lct}/input/lct_txt/"
output_path = f"{transform_lct}/evaluate/{batch_path}/model_output/{model_name}_{n_shot}{random_shot}_shot_prompt_{n_prompt}{temp_str}{cot_true}/output/"
os.makedirs(output_path, exist_ok=True)


study_files = os.listdir(study_path)[:5]

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



cot = "Let's think through this carefully, step by step:"
#command = "Insert the logical operators [AND], [OR], [NOT] into the following eligibility criteria and return the text in full without deleting/replacing anything. Do not say anything else." 
#command = f"{command} {cot}"


from unsloth import FastLanguageModel
model, tokenizer = FastLanguageModel.from_pretrained(
        model_name = "llama3_8b_lora_model", # YOUR MODEL YOU USED FOR TRAINING
        max_seq_length = 2048,
        dtype = None,
        load_in_4bit = True,
    )
FastLanguageModel.for_inference(model) # Enable native 2x faster inference


alpaca_prompt = """Below is an instruction that describes a task, paired with an input that provides further context. Write a response that appropriately completes the request.

### Instruction:
{}

### Input:
{}

### Response:
{}"""

command = read_text_file(f"{transform_lct}/input/prompt/p1.txt")

first_call = True

for file in study_files:
    file_name = file.split(".")[0]
    print("File:", file_name, "\n")
    
    test_file = read_text_file(study_path+file)

    inputs = tokenizer(
    [
        alpaca_prompt.format(
            f"{command}", # instruction
            f"{test_file}", # input
            "", # output - leave this blank for generation!
        )
    ], return_tensors = "pt").to("cuda")

    outputs = model.generate(**inputs, max_new_tokens = 2048, use_cache = True)
    tokenizer.batch_decode(outputs)

    print("Output:", outputs)

    save_txt(outputs, f"{output_path}{model_name}_{file_name}_{n_shot}_shot.txt")
