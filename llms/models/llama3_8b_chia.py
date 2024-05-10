import transformers
from helper_functions import *



INPUT_PATH = "/work/eauten2s/ec_criteria_struct/llms/input/chia/"
OUTPUT_PATH = "/work/eauten2s/ec_criteria_struct/llms/output/chia/"
model_name = "Llama-3-8B-Instruct"


@time_it
def main():
    model_id =  "meta-llama/Meta-Llama-3-8B-Instruct"

    pipeline = transformers.pipeline(
        "text-generation",
        model=model_id,
        model_kwargs={"torch_dtype": torch.bfloat16},
        device_map="auto", # device=cuda
    )

    contents = read_all_files_from_directory(INPUT_PATH)
    keys = list(contents.keys())

    model_desc = read_text_file(f"{INPUT_PATH}/model_description.txt")

    l1 = contents[keys[0]]
    s1 = contents[keys[1]]
    l2 = contents[keys[2]]
    s2 = contents[keys[3]]
    l3 = contents[keys[4]]
    s3 = contents[keys[5]]
    s4_test = contents[keys[6]]



    messages = [
        {"role": "system", "content": f"{model_desc}: {s1}"},
        {"role": "assistant", "content": l1},
        {"role": "user", "content": s2},
        {"role": "assistant", "content": l2},
        {"role": "user", "content": f"{s4_test}"},
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
    print("start Output")
    outputs = pipeline(
        prompt,
        max_new_tokens=500,# 500 (LLama3), 256 (BIoLLama)
        eos_token_id=terminators,
        do_sample=True,
        temperature=0.5,# 0.6 deterministich - kreativ
        top_p=0.9,
    )


    gen_output = outputs[0]["generated_text"][len(prompt):]

    ausgabe_js = parse_json(gen_output)

    print(f"\n {model_name} Output: \n  {gen_output} \n")




    save_txt(gen_output, f"{OUTPUT_PATH}/{model_name}_NCT00122070.txt")

    save_json_phi(gen_output, f"{OUTPUT_PATH}/{model_name}_NCT00122070.json")



if __name__ == "__main__":
    main()