import os
import tiktoken
import transformers

from openai import OpenAI




client = OpenAI(
  api_key='sk-proj-HyHBjQ17zJgYhbn4HYooT3BlbkFJqChjIl1UUqCcBE4GSePi',
  #organization='$org-gd7cNf2GXYihWhZKxOmQyJpw',
  #project='$proj_tCdOTjZHERlqndZpJtHhQ32C',
)
messages = []

message = """Über Few-Shot mit der Übergabe einiger Beispiele war eine Ausgabe der AST Struktur mit Open Source LLMs zumindest möglich, wobei aber beispielsweise mit Llama3 70B mit 10 Shot über 20\% der ausg
egebenen Dateien  fehlerhaft waren und Operatoren und Entitäten nicht gut erkannt wurden. Zudem macht die abstrakte Natur des \glsxtrlong{ast} es schwierig die Bäume zu 
evaluieren, da diese immer anders aufgebaut sein ahc link sun drechts ... können. """ 

model_desc = "verbessere, wissenschaftlich, kurz "

messages.append({"role": "system", "content": f"{model_desc}"})
messages.append({"role": "user", "content": message} )

completion = client.chat.completions.create(
model="gpt-4o",    # "gpt-4o-mini", "gpt-3.5-turbo",
messages=messages,
)
gen_output = completion.choices[0].message
gen_output = gen_output.content
print(gen_output)

