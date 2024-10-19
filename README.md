# Masterthesis



## Preprocessing





## Indirekte Strukturierung









## Direkte Strukturierung 






Modell Ausgabe: im Ordern llm_output 

Ordner: eval_functions


eval_json_output.ipynb

1) Prozessiert die Ausgabe aller Modelle in 3 Ordner: failure, structure_failure und ready
2) Precision-, Recall- und F1-Scores werden für die Entitäten berechnet 
   - Latex ausgabe: für alle Entitäten
   - Latex ausgabe: für totale Scores und vergleich mit ausgewählten LCT Entitäten
3) Precision-, Recall- und F1-Scores für Operatoren AND, AND*, OR, NOT werden berechnet
   - Latex ausgabe: für alle Operatoren mit Durchschnittswerte und vergleich zum SOTA 