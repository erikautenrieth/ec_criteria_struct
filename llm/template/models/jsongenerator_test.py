from jsonformer import Jsonformer
from transformers import AutoModelForCausalLM, AutoTokenizer

from llm.template.helper.helper_functions import read_text_file

model = AutoModelForCausalLM.from_pretrained("databricks/dolly-v2-12b")
tokenizer = AutoTokenizer.from_pretrained("databricks/dolly-v2-12b")

json_schema = {
    "type": "object",
    "properties": {
        "IC": {
            "type": "object",
            "patternProperties": {
                "^(IC[0-9]+) (AND|OR)$": {
                    "type": "object",
                    "patternProperties": {
                        "^IC[0-9]+\\.[0-9]+( OR| AND)?$": {
                            "oneOf": [
                                {"type": "string"},
                                {
                                    "type": "object",
                                    "patternProperties": {
                                        "^IC[0-9]+\\.[0-9]+( OR| AND)?$": {
                                            "type": "string"
                                        }
                                    }
                                }
                            ]
                        }
                    }
                },
                "^IC[0-9]+$": {"type": "string"}
            }
        },
        "EC": {
            "type": "object",
            "patternProperties": {
                "^(EC[0-9]+) (NOT OR|OR|AND)$": {
                    "type": "object",
                    "patternProperties": {
                        "^EC[0-9]+\\.[0-9]+( OR| AND)?$": {
                            "oneOf": [
                                {"type": "string"},
                                {
                                    "type": "object",
                                    "patternProperties": {
                                        "^EC[0-9]+\\.[0-9]+( OR| AND)?$": {
                                            "type": "string"
                                        }
                                    }
                                }
                            ]
                        }
                    }
                },
                "^EC[0-9]+$": {"type": "string"}
            }
        }
    },
    "additionalProperties": False
}
ec_data= "ec1"
txt_path = f'../inputs/{ec_data}.txt'
json_path = f'../outputs/{ec_data}.json'
text = read_text_file(txt_path)

prompt = f"Generate a the eligibility criteria json of {text} based on the following schema:"
jsonformer = Jsonformer(model, tokenizer, json_schema, prompt)
generated_data = jsonformer()

print(generated_data)