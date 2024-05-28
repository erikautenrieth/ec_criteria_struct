from transformers import AutoTokenizer, AutoModelForCausalLM

tokenizer = AutoTokenizer.from_pretrained("epfl-llm/meditron-70b", token="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")

model = AutoModelForCausalLM.from_pretrained("epfl-llm/meditron-70b", token="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").half()

input_text = """Inclusion Criteria: Overweight or obese subjects [according to body mass index (BMI)]
Fasting plasma glucose value between 100 and 125 mg/dl, with impaired fasting glucose or impaired glucose tolerance confirmed with oral glucose tolerance test (OGTT)
Total cholesterol values ≥ 200 mg/dl Exclusion Criteria: Patients with neoplastic and liver diseases, renal failure
Patients with type 1 or 2 diabetes mellitus
Pregnant or breastfeeding women
Hypersensitivity to any of the ingredients
Therapy with lipid-lowering drugs
Use of products containing red yeast rice"""

inputs = tokenizer(input_text, return_tensors="pt")


outputs = model.generate(**inputs)


decoded_output = tokenizer.decode(outputs[0], skip_special_tokens=True)

print(decoded_output)