import transformers
import torch
import psutil
from helper_functions import read_text_file, save_json, parse_json
import json

print(f"Anzahl der Kerne: {psutil.cpu_count(logical=True)}")
print(f"Total: {psutil.virtual_memory().total / (1024 ** 3):.2f} GB")

if torch.cuda.is_available():
    print("CUDA ist verfügbar. Folgende GPUs sind erreichbar:")
    num_gpus = torch.cuda.device_count()
    print(f"Anzahl verfügbarer GPUs: {num_gpus}")
    for i in range(num_gpus):
        print(f"GPU {i}: {torch.cuda.get_device_name(i)}")

model_id =  "meta-llama/Meta-Llama-3-8B-Instruct" # "meta-llama/Meta-Llama-3-8B" #

pipeline = transformers.pipeline(
    "text-generation",
    model=model_id,
    model_kwargs={"torch_dtype": torch.bfloat16},
    device="cuda",# cuda
)

prompt = """
Convert the following medical trial eligibility criteria into a structured JSON format:
Inclusion Criteria:
- Overweight or obese subjects [according to body mass index (BMI)]
- Fasting plasma glucose value between 100 and 125 mg/dl, with impaired fasting glucose or impaired glucose tolerance confirmed with oral glucose tolerance test (OGTT)
- Total cholesterol values ≥ 200 mg/dl

Exclusion Criteria:
- Patients with neoplastic and liver diseases, renal failure
- Patients with type 1 or 2 diabetes mellitus
- Pregnant or breastfeeding women
- Hypersensitivity to any of the ingredients
- Therapy with lipid-lowering drugs
- Use of products containing red yeast rice
"""

template = "{\"InclusionCriteria\":{\"IC1\":\"...\",\"IC2\":\"...\",\"ICx\":\"...\"},\"ExclusionCriteria\":{\"EC1\":\"...\",\"EC2\":\"...\",\"EC3\":\"...\",\"ECx\":\"...\",}}"
template_logic = "{\"AND\":{\"IC1\":{\"IC1\":\"...\",\"OR\":{\"IC1.x\":\"...\",}},\"IC2\":{\"IC2\":\"...\",\"AND\":{\"IC2.1\":\"...\",\"OR\":{\"IC2.x\":\"...\",}}},\"IC3\":\"...\"},\"NOTOR\":{\"EC1\":{\"EC1\":\"...\",\"OR\":{\"EC1.1\":\"...\",\"EC1.2\":\"...\",\"EC1.3\":\"...\"}},\"EC2\":{\"EC2\":\"...\",\"OR\":{\"EC2.1\":\"...\",\"EC2.2\":\"...\"}},\"EC3\":{\"EC3\":\"...\",\"OR\":{\"EC3.1\":\"...\",\"EC3.2\":\"...\"}},\"EC4\":\"...\",\"ECx\":\"...\"}}"
messages = [
    {"role": "system", "content": f"You are a Elegibility Criteria to JSON machine. Return inclusion and exclusion criteria as JSON object. For every critera a key and the description as values. Take only the descriptions, add nothing extra, and number them.If possible, further subdivide the criteria logically as in the template.. Use this template: {template}"},
    {"role": "user", "content": f"{prompt}"},
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
    max_new_tokens=500,
    eos_token_id=terminators,
    do_sample=True,
    temperature=0.6,# 0.6 deterministich - kreativ
    top_p=0.9,
)


ausgabe = outputs[0]["generated_text"][len(prompt):]
ausgabe_js = parse_json(ausgabe)
print(ausgabe_js)

file_name = "llama3_test"
json_path = f'../output/{file_name}.json'
save_json(ausgabe_js, json_path)