import torch
from transformers import AutoModelForCausalLM, AutoTokenizer, pipeline
from helper_functions import *


torch.random.manual_seed(0)

model = AutoModelForCausalLM.from_pretrained(
    "microsoft/Phi-3-mini-128k-instruct", 
    device_map="cpu", # cuda
    torch_dtype="auto", 
    trust_remote_code=True, 
)
tokenizer = AutoTokenizer.from_pretrained("microsoft/Phi-3-mini-128k-instruct")


schema1 = read_text_file("llm/template/input/s1.txt") # ../input/s1.txt
label1 = load_json_string("llm/template/input/s1_label.json") #   ../input/s1_label.json

input1 = read_text_file("llm/template/input/c1.txt") # ../input/c1.txt

messages = [
    {"role": "system", "content": "Create a JSON structure representing eligibility criteria for a clinical trial. Organize the criteria into inclusion (IC) and exclusion (EC) categories, each detailed with logical and numbered subcategories using AND, OR, and NOT operators.Return elegibility criterias of clinical studys in a logical form as json."},
    {"role": "user", "content": f"Return me this criterias in a logical form as json: {schema1}"},
    {"role": "assistant", "content": label1},
    {"role": "user", "content": f"Structure the following criterias as json: {input1}"},
]


pipe = pipeline(
    "text-generation",
    model=model,
    tokenizer=tokenizer,
)

generation_args = {
    "max_new_tokens": 700,
    "return_full_text": False,
    "temperature": 8.0,
    "do_sample": False,
}

output = pipe(messages, **generation_args)
gen_output = output[0]['generated_text']
print()
print(gen_output)
print()
## Fehler hier wir der Anfang abgeschnitten
json_object = json.loads(gen_output)


print(json_object)
# Ausgabe des JSON-Objekts
#pars_output = parse_json(output_json)
#print(pars_output)

#save_json(json_object, "../output/phi3_c2.json")
save_txt(gen_output, "llm/template/output/phi3_c1.txt")

save_json_phi(json_object, "llm/template/output/phi3_c1.json") # "../output/phi3_c2.json"

