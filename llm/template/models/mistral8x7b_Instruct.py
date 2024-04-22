
import requests
import os
from dotenv import load_dotenv
from llm.template.models.helper_functions import read_text_file, save_json
load_dotenv()
API_TOKEN = os.getenv("API_TOKEN")

ec_data= "ec1"
txt_path = f'../inputs/{ec_data}.txt'
json_path = f'../outputs/{ec_data}.json'

text = read_text_file(txt_path)
prompt = read_text_file('../inputs/prompt.txt') + text

API_URL = "https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1"
headers = {"Authorization": f"Bearer {API_TOKEN}"}

def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

output = query({"inputs": prompt,})


print("Ausgabe: \n")
print(output[0]["generated_text"])

save_json(output, json_path)
#%%
