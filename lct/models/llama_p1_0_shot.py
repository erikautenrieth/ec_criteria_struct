import os
import transformers
from helper_functions import *

batch_path = "eval_p1"

#model_id =  "meta-llama/Meta-Llama-3-70B-Instruct"
#model_name = "Llama-3-70B-Instruct"
model_id =  "meta-llama/Meta-Llama-3-70B-Instruct"
model_name = "Llama-3-70B-Instruct"



n_prompt = 9

#temp = 0.6
#temp_str = f"_temp_{str(temp).split('.')[1]}"
temp_str = ""
cot_true = "" #"_cot"

transform_lct ="/work/eauten2s/ec_criteria_struct/lct"
study_path = f"{transform_lct}/input/lct_txt/"
output_path = f"{transform_lct}/evaluate/{batch_path}/model_output/{model_name}_0_shot_prompt_{n_prompt}{temp_str}{cot_true}/output/"
os.makedirs(output_path, exist_ok=True)

study_files = os.listdir(study_path)[:100]


model_desc = read_text_file(f"{transform_lct}/input/prompt/p{n_prompt}.txt")
messages = []

cot = "Let's think through this carefully, step by step."

command = "Insert the logical operators [AND], [OR], [NOT] into the following eligibility criteria and return the text in full without deleting/replacing anything."# + cot



print("Hier fängt die Pipeline an")
pipeline = transformers.pipeline(
            "text-generation",
            model=model_id,
            model_kwargs={"torch_dtype": torch.bfloat16},
            device_map="auto", 
        )

first_call = True

for file in study_files:
    file_name = file.split(".")[0]
    print("File:", file_name, "\n")
    
    test_file = read_text_file(study_path+file)

    messages = [
    {"role": "system", "content": f"{model_desc}"},
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
            max_new_tokens=2048,
            eos_token_id=terminators,
            do_sample=True,
            temperature=0.6,
            top_p=0.95,
    )

    gen_output = outputs[0]["generated_text"][len(prompt):]

    
    save_txt(gen_output, f"{output_path}{model_name}_{file_name}_0_shot.txt")
