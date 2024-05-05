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

INPUT_PATH = "llms/input/label_1"
OUTPUT_PATH = "llms/output/label_1"

@time_it
def main():
    ## Print Cluster Resources
    #print_cluster_resources()

    model_name = "OpenBioLLM-70B"
    model_id =  "aaditya/Llama3-OpenBioLLM-70B" 

    pipeline = transformers.pipeline(
        "text-generation",
        model=model_id,
        model_kwargs={"torch_dtype": torch.bfloat16},
        device_map="auto", # device=cuda
    )
    ## Input Data
    model_description = """You are a Elegibility Criteria to JSON machine. Return inclusion and exclusion criteria as JSON object. 
                            For every critera a key and the description as values. Take only the descriptions, add nothing extra, and number them. If possible, 
                            further subdivide the criteria logically as in the template. Retrun the Criteria in JSON Format. Use this template:"""
    
    schema_input = read_text_file(f"{INPUT_PATH}/schema_0.txt")
    study_input = read_text_file(f"{INPUT_PATH}/study_1.txt")

   

    messages = [
        {"role": "system", "content": f"{model_description}: {schema_input}"},
        {"role": "user", "content": f"{study_input}"},
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
        max_new_tokens=256,# 500 (LLama3), 256 (BIoLLama)
        eos_token_id=terminators,
        do_sample=True,
        temperature=0.1,# 0.6 deterministich - kreativ
        top_p=0.9,
    )


    gen_output = outputs[0]["generated_text"][len(prompt):]

    ausgabe_js = parse_json(gen_output)

    print(f"\n {model_name} Output: \n  {gen_output} \n")




    save_txt(gen_output, f"{OUTPUT_PATH}/{model_name}_c1.txt")

    save_json_phi(gen_output, f"{OUTPUT_PATH}/{model_name}_c1.json")



if __name__ == "__main__":
    main()