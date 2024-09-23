import os
import transformers
from helper_functions import *

batch_path = "eval_full_chia" 
n_prompt = 2
n_shot = 5

model_id =  "meta-llama/Meta-Llama-3-70B-Instruct"
model_name = "Llama-3-70B-Instruct"


transform ="/work/eauten2s/ec_criteria_struct/chia"
model_desc = read_text_file(f"{transform}/input/prompt/chia_p2.txt")

study_path = f"{transform}/input/chia_text_full/"
output_path = f"{transform}/evaluate/{batch_path}/model_output/{model_name}_{n_shot}_shot_chia_prompt2/output/"

command = "Insert the logical operators [AND], [OR], [NOT] into the following eligibility criteria and return the text in full without deleting/replacing anything."
os.makedirs(output_path, exist_ok=True)


study_files = os.listdir(study_path)

shot_list_first = [
    "NCT00050349_exc.txt",
    "NCT00050349_inc.txt",
    "NCT00061308_exc.txt",
    "NCT00061308_inc.txt",
]

shot_list_best = [
    "NCT01320579_exc.txt",
    "NCT01320579_inc.txt",
    "NCT01491763_exc.txt",
    "NCT01669369_inc.txt",
    "NCT01700790_exc.txt",
    "NCT01700790_inc.txt",
    "NCT01709981_exc.txt",
    "NCT02056288_exc.txt",
    "NCT02202369_exc.txt"
]

shot_list = [
    "NCT01320579.txt",
    "NCT01491763.txt",
    "NCT01669369.txt",
    "NCT01700790.txt",
    "NCT01709981.txt",
]

# Load n-shot Data
study_folder = f"{transform}/input/chia_text_full/"
label_folder = f'{transform}/input/chia_p1_full'
study_filenames, study_contents, label_filenames, label_contents = read_matching_txt_files(study_folder, label_folder, shot_list)
studies = dict(zip(study_filenames, study_contents))
labels = dict(zip(label_filenames, label_contents))
messages = []

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
            temperature=0.5,
            top_p=0.95,
    )
 
    gen_output = outputs[0]["generated_text"][len(prompt):]

    save_txt(gen_output, f"{output_path}{model_name}_{file_name}_{n_shot}_shot.txt")
