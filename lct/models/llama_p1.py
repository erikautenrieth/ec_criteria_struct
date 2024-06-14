import os
import transformers
from helper_functions import *

batch_path = "eval_p1"
n_prompt = 4
n_shot = 15


temp_str = "" # temp_str = f"_temp_{str(temp).split('.')[1]}"   temp = 0.6
cot_true = "" # "_cot"
random_shot =""  # "_random"

#model_id =  "meta-llama/Meta-Llama-3-70B-Instruct"
#model_name = "Llama-3-70B-Instruct"

model_id =  "gradientai/Llama-3-70B-Instruct-Gradient-1048k"
model_name = "Llama-3-70B-Instruct-Gradient"


#model_id="MaziyarPanahi/Llama-3-70B-Instruct-DPO-v0.2"
#model_name = "Llama-3-70B-DPO-v0.2"

#model_id =  "gradientai/Llama-3-8B-Instruct-Gradient-1048k"
#model_name = "Llama-3-8B-Instruct-Gradient-1048k"
# model_id = "aaditya/OpenBioLLM-Llama3-70B"
#model_id = "aaditya/OpenBioLLM-Llama3-8B"
#model_name = "OpenBioLLM-Llama3-8B"
#model_id = "aaditya/OpenBioLLM-Llama3-70B"
#model_name = "OpenBioLLM-Llama3-70B"


transform_lct ="/work/eauten2s/ec_criteria_struct/lct"
model_desc = read_text_file(f"{transform_lct}/input/prompt/p{n_prompt}.txt")

study_path = f"{transform_lct}/input/lct_txt/"
output_path = f"{transform_lct}/evaluate/{batch_path}/model_output/{model_name}_{n_shot}{random_shot}_shot_prompt_{n_prompt}{temp_str}{cot_true}/output/"
os.makedirs(output_path, exist_ok=True)


study_files = os.listdir(study_path)[:100]

shot_list = [
    "NCT03865433.txt",
    "NCT03860324.txt",
    "NCT03860233.txt",
    "NCT03923231.txt",
    "NCT03930121.txt"
]

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
study_filenames, study_contents, label_filenames, label_contents = read_matching_txt_files(study_folder, label_folder, additional_files)

## Random n-shot Data
#study_filenames, study_contents, label_filenames, label_contents = read_random_matching_txt_files(study_folder, label_folder, n_shot)

studies = dict(zip(study_filenames, study_contents))
labels = dict(zip(label_filenames, label_contents))
messages = []

cot = "Let's think through this carefully, step by step."
#command = "Insert the logical operators [AND], [OR], [NOT] into the following eligibility criteria and return the text in full without deleting/replacing anything. Do not say anything else." 

command = read_text_file(f"{transform_lct}/input/prompt/command.txt")
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

    outputs = pipeline(
            prompt,
            max_new_tokens=2048,
            eos_token_id=terminators,
            do_sample=True,
            temperature=0.6,
            top_p=0.9,
    )

    gen_output = outputs[0]["generated_text"][len(prompt):]

    save_txt(gen_output, f"{output_path}{model_name}_{file_name}_{n_shot}_shot.txt")
