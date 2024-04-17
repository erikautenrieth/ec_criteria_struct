from transformers import AutoModelForCausalLM, AutoTokenizer
from transformers import pipeline
import json
import time



tokenizer = AutoTokenizer.from_pretrained("databricks/dolly-v2-12b")
model = AutoModelForCausalLM.from_pretrained("databricks/dolly-v2-12b").to('cuda')


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

generator = pipeline('text-generation', model=model, tokenizer=tokenizer, device=0)

start_time = time.time()
generated = generator(prompt, max_length=500, num_return_sequences=1)
generated_json = generated[0]['generated_text']
end_time = time.time()
elapsed_time = end_time - start_time
minutes, seconds = divmod(elapsed_time, 60)
print(f"Laufzeit: {int(minutes)} Minuten und {int(seconds)} Sekunden")

print("Generierter Text: \n", generated_json)

try:
    data_json = json.loads(generated_json)
except json.JSONDecodeError:
    print("Die generierten Daten sind kein gültiger JSON-String. Bitte überprüfen Sie die Ausgabe.")

# Speichern der Daten in einer Datei
with open('output.json', 'w', encoding='utf-8') as f:
    json.dump(generated_json, f, ensure_ascii=False, indent=4)
