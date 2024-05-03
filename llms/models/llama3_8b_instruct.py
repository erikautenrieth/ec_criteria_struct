import transformers
import torch

from helper_functions import *
import json



@time_it
def main():
    print_cluster_resources()


    # "meta-llama/Meta-Llama-3-8B" 
    # "aaditya/Llama3-OpenBioLLM-8B"
    model_id =  "meta-llama/Meta-Llama-3-8B-Instruct" 

    pipeline = transformers.pipeline(
        "text-generation",
        model=model_id,
        model_kwargs={"torch_dtype": torch.bfloat16},
        device="cuda", # cuda
    )

    schema_input = read_text_file("llms/input/label_1/schema_0.txt")
    study_input = read_text_file("llms/input/label_1/study_1.txt")


    messages = [
        {"role": "system", "content": f"You are a Elegibility Criteria to JSON machine. Return inclusion and exclusion criteria as JSON object. For every critera a key and the description as values. Take only the descriptions, add nothing extra, and number them.If possible, further subdivide the criteria logically as in the template.. Use this template: {schema_input}"},
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
        max_new_tokens=500,
        eos_token_id=terminators,
        do_sample=True,
        temperature=0.6,# 0.6 deterministich - kreativ
        top_p=0.9,
    )


    gen_output = outputs[0]["generated_text"][len(prompt):]

    ausgabe_js = parse_json(gen_output)
    print(ausgabe_js)


    save_txt(gen_output, "llms/output/label_1/llama3_8b_inst_c1.txt")

    save_json_phi(gen_output, "llms/output/label_1/llama3_8b_inst_c1.json")




    #file_name = "llama3_test"
    #json_path = f'../output/{file_name}.json'
    #save_json(ausgabe_js, json_path)



if __name__ == "__main__":
    main()