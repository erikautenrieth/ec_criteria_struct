import os
import transformers
from helper_functions import *
import time
from datetime import timedelta
import numpy as np
start_time = time.time()

batch_path = "0_shot_temp"


model_id =  "meta-llama/Meta-Llama-3-70B-Instruct"
model_name = "Llama-3-70B-Instruct"

n_prompt = 6

transform_lct ="/work/eauten2s/ec_criteria_struct/lct"
study_path = f"{transform_lct}/input/dataset/test/input/"

model_desc = read_text_file(f"{transform_lct}/input/prompt/p{n_prompt}.txt") 
command = read_text_file(f"{transform_lct}/input/prompt/p{n_prompt}.txt")

study_files = os.listdir(study_path)
messages = []


pipeline = transformers.pipeline(
            "text-generation",
            model=model_id,
            model_kwargs={"torch_dtype": torch.bfloat16},
            device_map="auto", 
        )


for temp in np.arange(0.1, 1.1, 0.1):
        temp = round(temp,2)
        output_path = f"{transform_lct}/evaluate_parse_1/{batch_path}/model_output/{model_name}_0_shot_{str(temp)}/output/"
        os.makedirs(output_path, exist_ok=True)

        first_call = True

        for file in study_files:
                file_name = file.split(".")[0]
                print("File:", file_name, "\n")
                
                test_file = read_text_file(study_path+file)

                messages = [
                {"role": "system", "content": f"{command}"},
                {"role": "user", "content": f"{command}{test_file}"}, 
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
                        max_new_tokens=2048,
                        eos_token_id=terminators,
                        do_sample=True,
                        temperature=temp,
                        top_p=0.95,
                )

                gen_output = outputs[0]["generated_text"][len(prompt):]
                save_txt(gen_output, f"{output_path}{model_name}_{file_name}_0_shot.txt")

