import torch
from transformers import AutoModelForCausalLM, AutoTokenizer, pipeline
from helper_functions import *

torch.random.manual_seed(0)

model = AutoModelForCausalLM.from_pretrained(
    "microsoft/Phi-3-mini-128k-instruct", 
    device_map="cuda", 
    torch_dtype="auto", 
    trust_remote_code=True, 
)
tokenizer = AutoTokenizer.from_pretrained("microsoft/Phi-3-mini-128k-instruct")


input1 = read_text_file("../input/c1.txt")
ergebnis1 = load_json_string("../input/schema1.json")
input2 = read_text_file("../input/c2.txt")

messages = [
    {"role": "system", "content": "You return elegibility criterias of clinical studys in a logical form as json."},
    {"role": "user", "content": f"Return me this criterias in a logical form as json: {input1}"},
    {"role": "assistant", "content": ergebnis1},
    {"role": "user", "content": f"Structure the following criterias as json: {input2}"},
]


pipe = pipeline(
    "text-generation",
    model=model,
    tokenizer=tokenizer,
)

generation_args = {
    "max_new_tokens": 700,
    "return_full_text": False,
    "temperature": 0.0,
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
save_json_phi(gen_output, "../output/phi3_c2.json")