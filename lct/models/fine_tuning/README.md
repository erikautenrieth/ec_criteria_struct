# Fine-Tuning



- Die LCT-Trainingsdaten sind im Ordner `dataset` gelistet.
  - p1 steht für txt-Dateien mit eingefügten Operatoren. (indirekte Strukturierung)
  - p4 steht für json-Dateien in AST-Struktur. (direkte Strukturierung) 


- Das entsprechende LLM kann über das gleichnamige Python-Skript trainiert werden.
  - Dazu muss das Python-Skript in der Batch-Datei `finetuning.sh` angepasst werden.