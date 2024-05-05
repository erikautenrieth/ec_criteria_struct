import torch
from transformers import AutoModelForCausalLM, AutoTokenizer, pipeline
from helper_functions import *

INPUT_PATH = "llms/input/label_1"
OUTPUT_PATH = "llms/output/label_1"
model_name = "Phi-3"

torch.random.manual_seed(0)



model = AutoModelForCausalLM.from_pretrained(
    "microsoft/Phi-3-mini-128k-instruct", 
    device_map="auto", # cuda
    torch_dtype="auto", 
    trust_remote_code=True, 
)
tokenizer = AutoTokenizer.from_pretrained("microsoft/Phi-3-mini-128k-instruct")



input1 = read_text_file(f"{INPUT_PATH}/c1.txt")
label1 = read_text_file(f"{INPUT_PATH}/schema_0.txt")

study_input = read_text_file(f"{INPUT_PATH}/study_1.txt")

messages = [
    {"role": "system", "content": "Create a JSON structure representing eligibility criteria for a clinical trial. Organize the criteria into inclusion (IC) and exclusion (EC) categories, each detailed with logical and numbered subcategories using AND, OR, and NOT operators with the corresponding IC or EC Tag. Return elegibility criterias of clinical studys in a logical form as json."},
    {"role": "user", "content": f"Return me this criterias in a logical form as json: {input1}"},
    {"role": "assistant", "content": label1},
    {"role": "user", "content": f"Structure the following criterias as json: {study_input}"},
]


pipe = pipeline(
    "text-generation",
    model=model,
    tokenizer=tokenizer,
)

generation_args = {
    "max_new_tokens": 700,
    "return_full_text": False,
    "temperature": 7.0,
    "do_sample": False,
}

output = pipe(messages, **generation_args)
gen_output = output[0]['generated_text']
print()
print(gen_output)
print()





# Ausgabe des JSON-Objekts
#json_object = json.loads(gen_output)
#print(json_object)
#pars_output = parse_json(output_json)
#print(pars_output)

#save_json(json_object, "../output/phi3_c2.json")
save_txt(gen_output, f"{OUTPUT_PATH}/{model_name}_c1.txt")

save_json_phi(gen_output, f"{OUTPUT_PATH}/{model_name}_c1.json")

