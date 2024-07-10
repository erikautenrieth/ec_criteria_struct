import os
os.environ["CUDA_VISIBLE_DEVICES"] = "0"

import transformers
from helper_functions import *
from transformers import pipeline, AutoTokenizer, AutoModelForCausalLM
from unsloth import FastLanguageModel

# pip install transformers==4.38.0

transform_lct ="/work/eauten2s/ec_criteria_struct/lct"

batch_path = "eval_p1_finetuned_prompt2" 
model_id = "tuned_models/llama3_70b_Lora_ep30_256_prompt6_v1"      #llama3_70b_Lora_ep10_128_prompt6_v2
model_name = "LoRA_Fine-Tuned_ep30_235_v1"

command = read_text_file(f"{transform_lct}/input/prompt/p6.txt")

study_path = f"{transform_lct}/input/dataset/test/input/"
output_path = f"{transform_lct}/evaluate_parse_1/{batch_path}/model_output/{model_name}/output/"
os.makedirs(output_path, exist_ok=True)
study_files = os.listdir(study_path)

model, tokenizer = FastLanguageModel.from_pretrained(
        model_name = model_id,
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

    outputs = model.generate(**inputs, max_new_tokens=2048, use_cache=True) #  temperature=0.5
    decoded_outputs = tokenizer.batch_decode(outputs)
    response = decoded_outputs[0].split("### Response:")[1].strip()
    response = response.replace("<|eot_id|>", "")
    save_txt(response, f"{output_path}{model_name}_{file_name}.txt")
