import transformers
from helper_functions import *
import time
## Studys
#model_name  = "Nxcode_7B_orpo"
#model_id = "NTQAI/Nxcode-CQ-7B-orpo"

# Model
model_id =  "meta-llama/Meta-Llama-3-8B-Instruct"
model_name = "Llama-3-8B-Instruct"



# Input/ Output
study_path = "/work/eauten2s/ec_criteria_struct/transform_chia/input/half_clinical_trials/"
output_path = f"/work/eauten2s/ec_criteria_struct/transform_chia/model_output/{model_name}_3_shot/"

anfang = 5 
ende = 10

study_files = os.listdir(study_path)[anfang:ende]   # mit LLama3 8B instruct bis [20:100]



model_desc = read_text_file(f"/work/eauten2s/ec_criteria_struct/transform_chia/chia_label/prompts/model_description.txt")



study_folder = "/work/eauten2s/ec_criteria_struct/transform_chia/input/half_clinical_trials/" 
label_folder = '/work/eauten2s/ec_criteria_struct/transform_chia/chia_label/p2_model_input' 
max_files = 3  

study_filenames, study_contents, label_filenames, label_contents = read_matching_txt_files(study_folder, label_folder, max_files)
studies = dict(zip(study_filenames, study_contents))
labels = dict(zip(label_filenames, label_contents))

study_keys = list(studies.keys())
label_keys = list(labels.keys())

study1 = studies[study_keys[0]]
study2 = studies[study_keys[1]]
study3 = studies[study_keys[2]]

label1 = labels[label_keys[0]]
label2 = labels[label_keys[1]]
label3 = labels[label_keys[2]]


print("Hier fängt die Pipeline an")
pipeline = transformers.pipeline(
            "text-generation",
            model=model_id,
            model_kwargs={"torch_dtype": torch.bfloat16},
            device_map="auto", 
        )
print("Pipeline fertig")
for file in study_files:
    file_name = file.split("_")[0]
    print("File:", file_name, "\n")
    
    test_file = read_text_file(study_path+file)

    messages = [
            {"role": "system", "content": f"{model_desc}: {study1}"},
            {"role": "assistant", "content": label1},
            {"role": "user", "content": f"bring the following study in json format with logical operators as in the example: {study2}"},
            {"role": "assistant", "content": label2},
            {"role": "user", "content": f"bring the following study in json format with logical operators as in the example: {study3}"},
            {"role": "assistant", "content": label3},
            {"role": "user", "content": f"bring the following study in json format with logical operators as in the example: {test_file}"},
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
            max_new_tokens=2000,# 500 (LLama3), 256 (BIoLLama)
            eos_token_id=terminators,
            do_sample=True,
            temperature=0.5,# 0.6 deterministich - kreativ
            top_p=0.9,
    )

    gen_output = outputs[0]["generated_text"][len(prompt):]
    print(f"\n {model_name} Output: \n  {gen_output} \n")
    
    save_json_phi(gen_output, f"{output_path}{model_name}_{file_name}_3_shot.json")
