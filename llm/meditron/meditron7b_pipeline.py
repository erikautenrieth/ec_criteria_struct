from transformers import pipeline
pipe = pipeline("text-generation", model="epfl-llm/meditron-7b")

input_text = """Inclusion Criteria: Overweight or obese subjects [according to body mass index (BMI)]
Fasting plasma glucose value between 100 and 125 mg/dl, with impaired fasting glucose or impaired glucose tolerance confirmed with oral glucose tolerance test (OGTT)
Total cholesterol values ≥ 200 mg/dl Exclusion Criteria: Patients with neoplastic and liver diseases, renal failure
Patients with type 1 or 2 diabetes mellitus
Pregnant or breastfeeding women
Hypersensitivity to any of the ingredients
Therapy with lipid-lowering drugs
Use of products containing red yeast rice"""

prompt = f"Transform the following medical criteria into a structured JSON format. Each inclusion and exclusion criterion should be numbered as 'IC1', 'IC2', etc., and 'EC1', 'EC2', etc. Here is the text to transform:"


output = pipe(prompt, max_length=1000)[0]['generated_text']

with open('output.txt', 'w') as file:
    file.write(output)

print("Der generierte Text wurde erfolgreich in 'output.txt' gespeichert.")


#%%
