from transformers import AutoModelForCausalLM, AutoTokenizer
from transformers import pipeline
from helper_functions import read_text_file, save_json, save_txt, time_it
import json
import time



tokenizer = AutoTokenizer.from_pretrained("databricks/dolly-v2-12b")
model = AutoModelForCausalLM.from_pretrained("databricks/dolly-v2-12b")#.to('cuda')

ec_data= "promt_dolly"
txt_path = f'llm/template/input/{ec_data}.txt'
json_path = f'llm/template/output/{ec_data}.json'

prompt = read_text_file(txt_path)


generator = pipeline('text-generation', model=model, tokenizer=tokenizer)#, device=0)



@time_it
def generate_text(prompt, generator, max_length=500, num_return_sequences=1):
    return generator(prompt, max_length=max_length, num_return_sequences=num_return_sequences)


generated = generate_text(prompt=prompt, generator=generator)
generated_json = generated[0]['generated_text']


print("Generierter Text: \n", generated_json)

save_json(generated_json, json_path)

save_txt(generated_json, f'llm/template/output/{ec_data}.txt')



with open(f'llm/template/output/{ec_data}_all.txt', 'w') as datei:
    for element in generated:
        for key, value in element.items():
            datei.write(f'{key}: {value}\n')
        datei.write('\n') 

