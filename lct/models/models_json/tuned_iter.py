import os
from datetime import timedelta
os.environ["CUDA_VISIBLE_DEVICES"] = "0"
from helper_functions import *
from unsloth import FastLanguageModel


batch_path = "std_fine_tuning_70B"
model_id = "tuned_models/llama3_70b_Lora_ep10_r256_prompt1_train_only_p4"
transform_lct ="/work/eauten2s/ec_criteria_struct/lct"
command = read_text_file(f"{transform_lct}/input/prompt/all_entitys_prompt1.txt")
study_path = f"{transform_lct}/input/dataset_p4_prompt1_new/test/input/"
study_files = os.listdir(study_path)

model, tokenizer = FastLanguageModel.from_pretrained(
        model_name = model_id, 
        max_seq_length = 2048,
        dtype = None,
        load_in_4bit = True,
    )
FastLanguageModel.for_inference(model) 
 
alpaca_prompt = """Below is an instruction that describes a task, paired with an input that provides further context. Write a response that appropriately completes the request.

### Instruction:
{}

### Input:
{}

### Response:
{}"""


for i in range(18,20):
    model_name = f"llama3_70b_ft_{i}"
    output_path = f"{transform_lct}/evaluate_struct/{batch_path}/model_output/{model_name}/output/"
    os.makedirs(output_path, exist_ok=True)
    first_call = True
    start_time = time.time()  
    for file in study_files:
        file_name = file.split(".")[0]
        test_file = read_text_file(study_path+file)

        inputs = tokenizer(
        [
            alpaca_prompt.format(
                f"{command}", 
                f"{test_file}", 
                "", 
            )
        ], return_tensors = "pt").to("cuda")
        outputs = model.generate(**inputs, max_new_tokens=2048, use_cache=True, temperature=1.0)
        decoded_outputs = tokenizer.batch_decode(outputs)
        response = decoded_outputs[0].split("### Response:")[1].strip()
        response = response.replace("<|eot_id|>", "")
        save_json(response, f"{output_path}{model_name}_{file_name}.json")

    end_time = time.time()  
    total_time = end_time - start_time
    total_time_str = str(timedelta(seconds=total_time))
    print(f"Benötigte Zeit: {total_time_str}")