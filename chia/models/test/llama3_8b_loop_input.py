import transformers
import torch
from helper_functions import *


# Setze die maximale Split-Größe für die Speicherallokation
#os.environ["PYTORCH_CUDA_ALLOC_CONF"] = "max_split_size_mb:516"

## LLama3
# "meta-llama/Meta-Llama-3-8B-Instruct" 
# "meta-llama/Meta-Llama-3-8B" 
## BIO LLMS
# "aaditya/Llama3-OpenBioLLM-8B"
# aaditya/Llama3-OpenBioLLM-70B

INPUT_PATH = "/work/eauten2s/ec_criteria_struct/llms/input/label_1"
OUTPUT_PATH = "/work/eauten2s/ec_criteria_struct/llms/output/label_1"
ITERS = 7

@time_it
def main():
    ## Print Cluster Resources
    #print_cluster_resources()

    model_name = "Llama-3-8B-Instruct"
    model_id =  "meta-llama/Meta-Llama-3-8B-Instruct" 

    pipeline = transformers.pipeline(
        "text-generation",
        model=model_id,
        model_kwargs={"torch_dtype": torch.bfloat16},
        device_map="auto", # device=cuda
    )

    schema_input = read_text_file(f"{INPUT_PATH}/schema_0.txt")
    study_input = read_text_file(f"{INPUT_PATH}/study_1.txt")
    model_desc = read_text_file(f"{INPUT_PATH}/model_description.txt")
    
    

    current_input = study_input
    for i in range(ITERS):
        print(f"Round NO.{i}")
        messages = [
            {"role": "system", "content": f"{model_desc}: {schema_input}"},
            {"role": "user", "content": f"{current_input}"},
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
            max_new_tokens=500,# 500 (LLama3), 256 (BIoLLama)
            eos_token_id=terminators,
            do_sample=True,
            temperature=0.5,# 0.6 deterministich - kreativ
            top_p=0.9,
        )


        gen_output = outputs[0]["generated_text"][len(prompt):]
        #   next_input = f"Structure the following criteria further in JSON with AND, OR if possible. Provide the result as JSON output.Separate diseases accordingly with AND/OR logic, and split if 'and' or 'or' appears in the sentence.: {gen_output}"

        next_input = f"Structure the following criteria further in JSON with AND, OR if possible. Provide the result as JSON output: {gen_output}"
        if i>0:
            current_input = next_input


    ausgabe_js = parse_json(gen_output)

    print(f"\n {model_name} Output: \n  {gen_output} \n")




    save_txt(gen_output, f"{OUTPUT_PATH}/{model_name}_{ITERS}_shot_s1.txt")

    save_json_phi(gen_output, f"{OUTPUT_PATH}/{model_name}{ITERS}_shot_s1.json")



if __name__ == "__main__":
    main()