import os
import transformers
from helper_functions import *

def read_matching_txt_files(n):
    input_dir = f"{transform_lct}/input/dataset/train/input"
    output_dir = f"{transform_lct}/input/dataset/train/output"
    input_files = [f for f in os.listdir(input_dir) if f.endswith('.txt')]
    output_files = [f for f in os.listdir(output_dir) if f.endswith('.txt')]
    input_files = sorted(input_files)
    output_files = sorted(output_files)
    selected_files = random.sample(list(zip(input_files, output_files)), n)
    input_contents = [open(os.path.join(input_dir, f[0]), 'r', encoding='utf-8').read() for f in selected_files]
    output_contents = [open(os.path.join(output_dir, f[1]), 'r', encoding='utf-8').read() for f in selected_files]
    nct_numbers = [f[0].split('_')[-1].split('.')[0] for f in selected_files]
    return nct_numbers, input_contents, output_contents

def create_messages(n, command):
    nct_numbers, study_contents, label_contents = read_matching_txt_files(n)
    messages = []
    messages.append({"role": "system", "content": f"{command}"})
    for i in range(n):
        print(f"NCT Number: {nct_numbers[i]}")
        messages.append({"role": "user", "content": f"{command} {study_contents[i]}"})
        messages.append({"role": "assistant", "content": label_contents[i]})
    return messages


transform_lct ="/work/eauten2s/ec_criteria_struct/lct"
model_id =  "meta-llama/Meta-Llama-3-70B-Instruct"
model_name = "Llama-3-70B-Instruct"
command = read_text_file(f"{transform_lct}/input/prompt/p6.txt")

pipeline = transformers.pipeline(
            "text-generation",
            model=model_id,
            model_kwargs={"torch_dtype": torch.bfloat16},
            device_map="auto", 
            )


for i in range(4, 5):
    batch_path = f"eval_n_shot/eval_{i}_shot"
    n_shot = i
    
    for j in range(0, 20):
        study_path = f"{transform_lct}/input/dataset/test/input/"
        output_path = f"{transform_lct}/evaluate_parse_1/{batch_path}/model_output/{n_shot}_shot_v_{j}/output/"  
        os.makedirs(output_path, exist_ok=True)
        study_files = os.listdir(study_path)

        messages = create_messages(n=n_shot,command=command)

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
