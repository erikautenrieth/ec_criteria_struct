import os
import transformers
from helper_functions import *

batch_path = "eval_p2"

n_shot = 3
struct_prompt = 2

model_id =  "meta-llama/Meta-Llama-3-70B-Instruct"
model_name = "Llama-3-70B-Instruct"


transform_lct ="/work/eauten2s/ec_criteria_struct/lct"
study_path = f"{transform_lct}/input/dataset_p2/test/input/"
output_path = f"{transform_lct}/evaluate_struct/{batch_path}/model_output/{model_name}_{n_shot}_shot_prompt2/output/"
os.makedirs(output_path, exist_ok=True)


study_files = os.listdir(study_path)
command = read_text_file(f"{transform_lct}/input/prompt/struct_p2/promt2_p2.txt")


# Load n-shot Data
n_shot_folder = f"{transform_lct}/input/n_shot_files_p2"
study_filenames, study_contents, label_filenames, label_contents = read_matching_p2_files(n_shot_folder, n_shot)
studies = dict(zip(study_filenames, study_contents))
labels = dict(zip(label_filenames, label_contents))
messages = []

#command = "Bring the following eligibility criterias in Json format with logical operators:"

messages.append({"role": "system", "content": f"{command}"})

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
    save_json(gen_output, f"{output_path}{model_name}_{file_name}.json")
