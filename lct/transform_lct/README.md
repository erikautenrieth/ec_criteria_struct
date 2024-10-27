
# LCT-Korpus Preprocessing




- `0_extract_operators.ipynb`: Fügt AND, OR NOT Operatoren in die LCT-Korpusdateien ein.
- `1_parse_p1.ipynb`: Parst angereicherte LCT-Daten in ein JSON-Format.
- `2_parse_p2.ipynb`: Parst die p1-Dateien in eine AST-Struktur im JSON-Format.
- `3_parse_p3.ipynb`: Fügt Enititäten in die AST-Struktur ein.


- `Node.py`: Klasse für die AST-Struktur.
- `preprocessing_functions.py`: Hilfsfunktionen für die Preprocessing-Schritte.
- `lct_korpus`: Ergebnisse der Parsing-Prozesse.