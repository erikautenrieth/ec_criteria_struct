import os
import transformers
from helper_functions import *
import time
from datetime import timedelta

start_time = time.time()

batch_path = "eval_0_shot_evaldata"


model_id =  "meta-llama/Meta-Llama-3-70B-Instruct"
model_name = "Llama-3-70B-Instruct"

n_prompt = 6
temp = 0.5

transform_lct ="/work/eauten2s/ec_criteria_struct/lct"
study_path = f"{transform_lct}/input/dataset/test/input/"

model_desc = read_text_file(f"{transform_lct}/input/prompt/agent.txt") 
command = read_text_file(f"{transform_lct}/input/prompt/p{n_prompt}.txt")


cot = "Let's think through this carefully, step by step."


EP02 = "This is very important to my career"
EP05 = "Are you sure that's your final answer? It might be worth taking another look." 
EP07 = "Are you sure that's your final answer? Believe in your abilities and strive for excellence. Your hard work will yield remarkable results."
EP09 = "Stay focused and dedicated to your goals. Your consistent efforts will lead to outstanding achievements"
#EP08: Embrace challenges as opportunities for growth. Each obstacle you overcome brings you closer to success.
#EP10: Take pride in your work and give it your best. Your commitment to excellence sets you apart.

EP = EP02 + EP07 + EP09

output_path = f"{transform_lct}/evaluate_parse_1/{batch_path}/model_output/{model_name}_0_shot_prompt_2_agent/output/"
os.makedirs(output_path, exist_ok=True)

study_files = os.listdir(study_path)


messages = []


print("Hier fängt die Pipeline an")
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

    messages = [
    {"role": "system", "content": f"{model_desc}"},
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



end_time = time.time()
execution_time = end_time - start_time
time_delta = timedelta(seconds=int(execution_time))
hours, remainder = divmod(time_delta.seconds, 3600)
minutes, _ = divmod(remainder, 60)

print(f"Total execution time: {hours:02d}:{minutes:02d}")