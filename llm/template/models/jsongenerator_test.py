from jsonformer import Jsonformer
from transformers import AutoModelForCausalLM, AutoTokenizer

from llm.template.helper.helper_functions import read_text_file


model = AutoModelForCausalLM.from_pretrained("databricks/dolly-v2-12b")
tokenizer = AutoTokenizer.from_pretrained("databricks/dolly-v2-12b")


json_schema_2 = {
    "type": "object",
    "properties": {
        "InclusionCriteria": {
            "type": "array",
            "items": {"type": "string"}
        },
        "ExclusionCriteria": {
            "type": "array",
            "items": {"type": "string"}
        }
    }
}
json_schema = {
    "type": "object",
    "properties": {
        "InclusionCriteria": {
            "type": "object",
            "properties": {
                "IC": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "id": {"type": "string"},
                            "description": {"type": "string"}
                        }
                    }
                }
            }
        },
        "ExclusionCriteria": {
            "type": "object",
            "properties": {
                "EC": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "id": {"type": "string"},
                            "description": {"type": "string"}
                        }
                    }
                }
            }
        }
    }
}



ec_data= "ec1"
txt_path = f'../inputs/{ec_data}.txt'
json_path = f'../outputs/{ec_data}.json'

txt = """Inclusion Criteria: Overweight or obese subjects [according to body mass index (BMI)]
Fasting plasma glucose value between 100 and 125 mg/dl, with impaired fasting glucose or impaired glucose tolerance confirmed with oral glucose tolerance test (OGTT)
Total cholesterol values ≥ 200 mg/dl 
Exclusion Criteria: Patients with neoplastic and liver diseases, renal failure
Patients with type 1 or 2 diabetes mellitus
Pregnant or breastfeeding women
Hypersensitivity to any of the ingredients
Therapy with lipid-lowering drugs
Use of products containing red yeast rice"""
#text = read_text_file(txt_path)

prompt = f"Generate a the eligibility criteria json of {txt} based on the following schema:"
jsonformer = Jsonformer(model, tokenizer, json_schema, prompt)
generated_data = jsonformer()

print(generated_data)