import transformers
from helper_functions import *
import time
## Studys
study_path = "/work/eauten2s/ec_criteria_struct/datasets/Chia/transform_chia/input/studys/"
output_path = "/work/eauten2s/ec_criteria_struct/datasets/Chia/transform_chia/eval/llama3_inst_3_shot/"



INPUT_PATH = "/work/eauten2s/ec_criteria_struct/llms/input/chia/"
OUTPUT_PATH = "/work/eauten2s/ec_criteria_struct/llms/output/chia/"
model_name = "Llama-3-8B-Instruct"

model_id =  "meta-llama/Meta-Llama-3-8B-Instruct"

study_files = os.listdir(study_path)[20:100]

model_desc = read_text_file(f"/work/eauten2s/ec_criteria_struct/llms/input/model_description.txt")
s1 = read_text_file(INPUT_PATH+"NCT00050349_desc.txt")
l1 = read_text_file(INPUT_PATH+"NCT00050349.txt")
s2 = read_text_file(INPUT_PATH+"NCT00061308_desc.txt")
l2 = read_text_file(INPUT_PATH+"NCT00061308.txt")
s3 = read_text_file(INPUT_PATH+"NCT00094861_desc.txt")
l3 = read_text_file(INPUT_PATH+"NCT00094861.txt")

pipeline = transformers.pipeline(
            "text-generation",
            model=model_id,
            model_kwargs={"torch_dtype": torch.bfloat16},
            device_map="auto", 
        )

for file in study_files:
    file_name = file.split("_")[0]
    print("File:", file_name, "\n")
    
    test_file = read_text_file(study_path+file)

    messages = [
            {"role": "system", "content": f"{model_desc}: {s1}"},
            {"role": "assistant", "content": l1},
            {"role": "user", "content": f"bring the following study in json format with logical operators as in the example: {s2}"},
            {"role": "assistant", "content": l2},
            {"role": "user", "content": f"bring the following study in json format with logical operators as in the example: {s3}"},
            {"role": "assistant", "content": l3},
            {"role": "user", "content": f"bring the following study in json format with logical operators as in the example: {test_file}"},
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
    print(f"\n {model_name} Output: \n  {gen_output} \n")
    
    save_json_phi(gen_output, f"{output_path}{model_name}_{file_name}_3_shot.json")
