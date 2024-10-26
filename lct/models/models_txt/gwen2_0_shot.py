from transformers import AutoModelForCausalLM, AutoTokenizer
from helper_functions import *
import time
from datetime import timedelta

start_time = time.time()

batch_path = "modelle_prompt2"
model_id =  "Qwen/Qwen2-72B-Instruct"
model_name = "Qwen2-72B"
transform_lct ="/work/eauten2s/ec_criteria_struct/lct"
study_path = f"{transform_lct}/input/dataset/test/input/"
command = read_text_file(f"{transform_lct}/input/prompt/p6.txt")
output_path = f"{transform_lct}/evaluate_parse_1/{batch_path}/model_output/{model_name}_0_shot/output/"
os.makedirs(output_path, exist_ok=True)
study_files = os.listdir(study_path)


model = AutoModelForCausalLM.from_pretrained(
    "Qwen/Qwen2-72B-Instruct",
    torch_dtype="auto",
    device_map="auto",
    temperature=0.5,
)

tokenizer = AutoTokenizer.from_pretrained("Qwen/Qwen2-72B-Instruct")
first_call = True

for file in study_files:
    file_name = file.split(".")[0]
    print("File:", file_name, "\n")
    test_file = read_text_file(study_path+file)
    messages = [{"role": "user", "content": f"{command}{test_file}"}]

    text = tokenizer.apply_chat_template(
        messages,
        tokenize=False,
        add_generation_prompt=True
    )

    model_inputs = tokenizer([text], return_tensors="pt").to("cuda")
    generated_ids = model.generate(
        model_inputs.input_ids,
        max_new_tokens=2048,
    )
    generated_ids = [
        output_ids[len(input_ids):] for input_ids, output_ids in zip(model_inputs.input_ids, generated_ids)
    ]
    response = tokenizer.batch_decode(generated_ids, skip_special_tokens=True)[0]
    save_txt(response, f"{output_path}{model_name}_{file_name}_0_shot.txt")


end_time = time.time()
execution_time = end_time - start_time
time_delta = timedelta(seconds=int(execution_time))
hours, remainder = divmod(time_delta.seconds, 3600)
minutes, _ = divmod(remainder, 60)

print(f"Total execution time: {hours:02d}:{minutes:02d}")