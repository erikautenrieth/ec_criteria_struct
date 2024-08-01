import os
import transformers
from helper_functions import *
import numpy as np


batch_path = "8b_5_shot_max_iter"

n_prompt = 6
n_shot = 5

model_id =  "meta-llama/Meta-Llama-3-8B-Instruct"

transform_lct ="/work/eauten2s/ec_criteria_struct/lct"


model_desc = read_text_file(f"{transform_lct}/input/prompt/p{n_prompt}.txt") 
command = read_text_file(f"{transform_lct}/input/prompt/p{n_prompt}.txt")
study_path = f"{transform_lct}/input/dataset/test/input/"

study_files = os.listdir(study_path)


most_operators = [
    "NCT03860857.txt",  # 31 Operatoren
    "NCT03866200.txt",  # 30 Operatoren
    "NCT03861559.txt",  # 29 Operatoren
    "NCT03865589.txt",  # 26 Operatoren
    "NCT03868475.txt"   # 24 Operatoren
]


study_folder = f"{transform_lct}/input/lct_txt/"
label_folder = f'{transform_lct}/input/lct_p1'
study_filenames, study_contents, label_filenames, label_contents = read_matching_txt_files(study_folder, label_folder, most_operators)
studies = dict(zip(study_filenames, study_contents))
labels = dict(zip(label_filenames, label_contents))


pipeline = transformers.pipeline(
            "text-generation",
            model=model_id,
            model_kwargs={"torch_dtype": torch.bfloat16},
            device_map="auto", 
        )
messages = []
messages.append({"role": "system", "content": f"{model_desc}"})

for i in range(n_shot):
    messages.append({"role": "user", "content": f"{command} {studies[study_filenames[i]]}"})
    messages.append({"role": "assistant", "content": labels[label_filenames[i]]})


for i in np.arange(0, 10):
    model_name = f"Llama-3-8B"
    output_path = f"{transform_lct}/evaluate_parse_1/{batch_path}/model_output/{model_name}_{n_shot}_shot_max_v{i}/output/"
    os.makedirs(output_path, exist_ok=True)

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
