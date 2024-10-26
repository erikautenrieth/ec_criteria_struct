import os
import transformers
from helper_functions import *

import torch
def clean_cuda_memory():
    torch.cuda.empty_cache()
    torch.cuda.ipc_collect()

clean_cuda_memory()

batch_path = "modelle_prompt2"

n_prompt = 6
n_shot = 5

#model_id =  "meta-llama/Meta-Llama-3-70B-Instruct"
#model_name = "Llama-3-70B-Instruct"

#model_id = "meta-llama/Meta-Llama-3.1-8B-Instruct"
#model_name = "Llama-3.1-8B-Instruct"

model_id =  "meta-llama/Meta-Llama-3.1-405B-Instruct" # transformers==4.43.1  vllm==0.5.3.post1
model_name = "Llama-3.1-405B-Instruct"



#model_id =  "NousResearch/Hermes-2-Theta-Llama-3-70B"
#model_name = "Llama-3-70B-Hermes2"

#model_id =  "gradientai/Llama-3-70B-Instruct-Gradient-1048k"
#model_name = "Llama-3-70B-Instruct-Gradient"

#model_id="MaziyarPanahi/Llama-3-70B-Instruct-DPO-v0.2"
#model_name = "Llama-3-70B-DPO-v0.2"

#model_id =  "gradientai/Llama-3-8B-Instruct-Gradient-1048k"
#model_name = "Llama-3-8B-Instruct-Gradient-1048k"

#model_id = "aaditya/OpenBioLLM-Llama3-8B"
#model_name = "OpenBioLLM-Llama3-8B"

#model_id = "aaditya/OpenBioLLM-Llama3-70B"
#model_name = "OpenBioLLM-Llama3-70B"


transform_lct ="/work/eauten2s/ec_criteria_struct/lct"


model_desc = read_text_file(f"{transform_lct}/input/prompt/p{n_prompt}.txt") 
command = read_text_file(f"{transform_lct}/input/prompt/p{n_prompt}.txt")



study_path = f"{transform_lct}/input/dataset/test/input/"
output_path = f"{transform_lct}/evaluate_parse_1/{batch_path}/model_output/{model_name}_{n_shot}_shot/output/"

os.makedirs(output_path, exist_ok=True)


study_files = os.listdir(study_path)

shot_list = [
    "NCT03865433.txt",
    "NCT03860324.txt",
    "NCT03860233.txt",
    "NCT03923231.txt",
    "NCT03930121.txt"
]

most_operators = [
    "NCT03860857.txt",  # 31 Operatoren
    "NCT03866200.txt",  # 30 Operatoren
    "NCT03861559.txt",  # 29 Operatoren
    "NCT03865589.txt",  # 26 Operatoren
    "NCT03868475.txt"   # 24 Operatoren
]

least_operators = [
    "NCT03864653.txt",  # 3 Operatoren
    "NCT03867422.txt",  # 3 Operatoren
    "NCT03868865.txt",  # 3 Operatoren
    "NCT03921138.txt",  # 3 Operatoren
    "NCT03922269.txt"   # 3 Operatoren
]

# 15 -shot
additional_files = [
    "NCT03865433.txt",
    "NCT03860324.txt",
    "NCT03860233.txt",
    "NCT03923231.txt",
    "NCT03930121.txt",
    "NCT03863717.txt",
    "NCT03863925.txt",
    "NCT03863951.txt",
    "NCT03865134.txt",
    "NCT03868267.txt",
    "NCT03929640.txt",
    "NCT03861845.txt",
    "NCT03921827.txt",
    "NCT03924479.txt",
    "NCT03924102.txt"
]

# Load n-shot Data
study_folder = f"{transform_lct}/input/lct_txt/"
label_folder = f'{transform_lct}/input/lct_p1'
study_filenames, study_contents, label_filenames, label_contents = read_matching_txt_files(study_folder, label_folder, shot_list)
studies = dict(zip(study_filenames, study_contents))
labels = dict(zip(label_filenames, label_contents))
messages = []

cot = "Let's think through this carefully, step by step."


EP02 = "This is very important to my career"
EP05 = "Are you sure that's your final answer? It might be worth taking another look." 
EP07 = "Are you sure that's your final answer? Believe in your abilities and strive for excellence. Your hard work will yield remarkable results."
EP09 = "Stay focused and dedicated to your goals. Your consistent efforts will lead to outstanding achievements"
#EP08: Embrace challenges as opportunities for growth. Each obstacle you overcome brings you closer to success.
#EP10: Take pride in your work and give it your best. Your commitment to excellence sets you apart.
EP = EP02 + EP07 + EP09



messages.append({"role": "system", "content": f"{model_desc}"})

for i in range(n_shot):
    messages.append({"role": "user", "content": f"{command} {studies[study_filenames[i]]}"})
    messages.append({"role": "assistant", "content": labels[label_filenames[i]]})


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

    if first_call:
        messages.append({"role": "user", "content": f"{command} {test_file}"})
        first_call = False
    else:
        messages[-1] = {"role": "user", "content": f"{command} {test_file}"} 


    prompt = pipeline.tokenizer.apply_chat_template(
                messages, 
                tokenize=False, 
                add_generation_prompt=True
    )

    terminators = [
            pipeline.tokenizer.eos_token_id,
            pipeline.tokenizer.convert_tokens_to_ids("<|eot_id|>")
    ]

    with torch.cuda.amp.autocast():
        outputs = pipeline(
            prompt,
            max_new_tokens=2048,
            eos_token_id=terminators,
            do_sample=True,
            temperature=0.5,
            top_p=0.95,
        )

    gen_output = outputs[0]["generated_text"][len(prompt):]

    save_txt(gen_output, f"{output_path}{model_name}_{file_name}_{n_shot}_shot.txt")
