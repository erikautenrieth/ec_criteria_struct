import os
import transformers
from helper_functions import *

batch_path = "eval_p1"
n_shot = 5
n_prompt = 1


model_id =  "meta-llama/Meta-Llama-3-70B-Instruct"
model_name = "Llama-3-70B-Instruct"
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
output_path = f"{transform_lct}/evaluate/{batch_path}/model_output/{model_name}_{n_shot}_shot_prompt_{n_prompt}/output/"
os.makedirs(output_path, exist_ok=True)


study_files = os.listdir(study_path)[:100]

shot_list = [
    "NCT03865433.txt",
    "NCT03860324.txt",
    "NCT03860233.txt",
    "NCT03923231.txt",
    "NCT03930121.txt"
]


# Load n-shot Data
study_folder = f"{transform_lct}/input/lct_txt/"
label_folder = f'{transform_lct}/input/lct_p1'
study_filenames, study_contents, label_filenames, label_contents = read_matching_txt_files(study_folder, label_folder, shot_list)
studies = dict(zip(study_filenames, study_contents))
labels = dict(zip(label_filenames, label_contents))
messages = []

command = "Insert the logical operators [AND], [OR], [NOT] into the following eligibility criteria and return the text in full without deleting/replacing anything:"

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
