import os
import transformers
from helper_functions import *
# Path

batch_path = "batch1"
transform_chia ="/work/eauten2s/ec_criteria_struct/chia"

# Model
model_id =  "meta-llama/Meta-Llama-3-8B-Instruct"
model_name = "Llama-3-8B-Instruct"

# Input/ Output
study_path = f"{transform_chia}/input/half_clinical_trials/"
output_path = f"{transform_chia}/evaluate/{batch_path}/model_output/{model_name}_0_shot/output/"
os.makedirs(output_path, exist_ok=True)

# Load Prediction Files
anfang = 0 
ende = 300
study_files = os.listdir(study_path)[anfang:ende]  


# Load Model Description
model_desc_0_shot = read_text_file(f"{transform_chia}/input/prompts/model_desc_0_shot.txt")

command = "bring the following study in JSON format with logical operators. Only return JSON! :"


print(f"Hier fängt die Pipeline an. {model_name}")
pipeline = transformers.pipeline(
            "text-generation",
            model=model_id,
            model_kwargs={"torch_dtype": torch.bfloat16},
            device_map="auto", 
        )

for file in study_files:
    file_name = file.split(".")[0]
    print("File:", file_name, "\n")
    
    test_file = read_text_file(study_path+file)

    messages = [
    {"role": "system", "content": f"{model_desc_0_shot}"},
    {"role": "user", "content": f"{command} {test_file}"},
    ]

    prompt = pipeline.tokenizer.apply_chat_template(
                messages, 
                tokenize=False, 
                add_generation_prompt=True
    )

    terminators = [
            pipeline.tokenizer.eos_token_id,
            pipeline.tokenizer.convert_tokens_to_ids("<|eot_id|>")
    ]

    outputs = pipeline(
            prompt,
            max_new_tokens=2000,# 500 (LLama3), 256 (BIoLLama)
            eos_token_id=terminators,
            do_sample=True,
            temperature=0.5,# 0.6 deterministich - kreativ
            top_p=0.9,
    )

    gen_output = outputs[0]["generated_text"][len(prompt):]
   
    #print(f"\n {model_name} Output: \n  {gen_output} \n")
    
    save_json(gen_output, f"{output_path}{model_name}_{file_name}_0_shot.json")
