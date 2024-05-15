from transformers import AutoModelForCausalLM, AutoTokenizer
from helper_functions import *
import time
## Studys

#model_id =  "meta-llama/Meta-Llama-3-8B-Instruct"
#model_name = "Llama-3-8B-Instruct"

model_name  = "Nxcode_7B_orpo"
model_id = "NTQAI/Nxcode-CQ-7B-orpo"

study_path = "/work/eauten2s/ec_criteria_struct/datasets/Chia/transform_chia/input/studys/"
output_path = f"/work/eauten2s/ec_criteria_struct/datasets/Chia/transform_chia/eval/{model_name}_3_shot/"


INPUT_PATH = "/work/eauten2s/ec_criteria_struct/llms/input/chia/"
OUTPUT_PATH = "/work/eauten2s/ec_criteria_struct/llms/output/chia/"




study_files = os.listdir(study_path)[:5]   # mit LLama3 8B instruct bis [20:100]

model_desc = read_text_file(f"/work/eauten2s/ec_criteria_struct/llms/input/model_description.txt")
s1 = read_text_file(INPUT_PATH+"NCT00050349_desc.txt")
l1 = read_text_file(INPUT_PATH+"NCT00050349.txt")
s2 = read_text_file(INPUT_PATH+"NCT00061308_desc.txt")
l2 = read_text_file(INPUT_PATH+"NCT00061308.txt")
s3 = read_text_file(INPUT_PATH+"NCT00094861_desc.txt")
l3 = read_text_file(INPUT_PATH+"NCT00094861.txt")

device = "cuda" # the device to load the model onto

model = AutoModelForCausalLM.from_pretrained(
    "NTQAI/Nxcode-CQ-7B-orpo",
    torch_dtype="auto",
    device_map="auto"
)
tokenizer = AutoTokenizer.from_pretrained("NTQAI/Nxcode-CQ-7B-orpo")


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

    inputs = tokenizer.apply_chat_template(messages, add_generation_prompt=True, return_tensors="pt").to(model.device)
    outputs = model.generate(inputs, max_new_tokens=2000, do_sample=False, top_k=50, top_p=0.95, num_return_sequences=1, eos_token_id=tokenizer.eos_token_id)
    res = tokenizer.decode(outputs[0][len(inputs[0]):], skip_special_tokens=True)

    print(f"\n {model_name} Output: \n  {res} \n")
    
    save_json_phi(res, f"{output_path}{model_name}_{file_name}_3_shot.json")
