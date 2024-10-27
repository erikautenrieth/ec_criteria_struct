# Modell Inferenz


## Indirekte Strukturierung von Eignungskriterien
### Einfügen von logischen Operatoren in Eignungskriterientexte 



- Die Open-Source Modelle llama3, qwen2, gemma2 können über die gleichnamige Python-Datei über das Bash-Skript `lct_p4.sh` aufgerufen werden.
  - Dabei muss das Huggingface-Token spezifiziert werden.
  - Die Input-Pfade müssen für eine Nutzung angepasst werden.
  

- Modelle mit Fine-Tuning können über die `ft_llama3_8b.py` und `ft_llama3_70b.py` auch über das Bash-Skript ausgeführt werden.
  - Wichtig: die Modelle stehen nicht bereit da die Dateien zu groß sind. Die Modelle müssen selbst trainiert werden. Die Instruktionen dafür sind im Ordner `fine_tuning`.
  - Für die Inferenz von Fine-Tuning Modellen muss eine spezielle transformer-version geladen werden: pip install transformers==4.38.0
  - 

- Das GPT-4o Modell kann über das `gpt_4o.py` File aufgerufen werden.
  - Dabei muss das api_key angegeben werden.
  - Die Input-Pfade müssen für eine Nutzung angepasst werden.