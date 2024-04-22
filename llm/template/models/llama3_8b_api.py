import requests
import os
from dotenv import load_dotenv

load_dotenv()
API_TOKEN = os.getenv("API_TOKEN")
#API_URL = "https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-8B"
# API_URL = "https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-8B-Instruct"
# API_URL = "https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-70B"
# API_URL = "https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-70B-Instruct"
API_URL = "https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-8B"

headers = {"Authorization": f"Bearer {API_TOKEN}"}

def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

prompt = """
Convert the following medical trial eligibility criteria into a structured JSON format:
Inclusion Criteria:
- Overweight or obese subjects [according to body mass index (BMI)]
- Fasting plasma glucose value between 100 and 125 mg/dl, with impaired fasting glucose or impaired glucose tolerance confirmed with oral glucose tolerance test (OGTT)
- Total cholesterol values ≥ 200 mg/dl

Exclusion Criteria:
- Patients with neoplastic and liver diseases, renal failure
- Patients with type 1 or 2 diabetes mellitus
- Pregnant or breastfeeding women
- Hypersensitivity to any of the ingredients
- Therapy with lipid-lowering drugs
- Use of products containing red yeast rice

Please format the information as a JSON object with arrays of strings for inclusion and exclusion criteria.Just return the JSON object once and no comments.
"""


output = query({"inputs": prompt})


print("Ausgabe: \n")
print(output)

