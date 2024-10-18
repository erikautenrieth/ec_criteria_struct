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





response = client.chat.completions.create(
    model="o1-preview",
    messages=[
        {
            "role": "user", 
            "content": "Write a bash script that takes a matrix represented as a string with format '[1,2],[3,4],[5,6] and prints the transpose in the same format."
        }
    ]
)

print(response.choices[0].message.content)






