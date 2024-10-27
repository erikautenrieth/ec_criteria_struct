# Masterthesis


Zur Strukturierung von Eignungskriterien wurden zwei Korpora analysiert.
LCT-Korpus und Chia-Korpus. Zudem wurden zwei methodische Ansätze verfolgt.

1. Indirekte Strukturierung: LLMs fügen die logischen Operatoren in die Eignungskriterientexte ein.
2. Direkte Strukturierung: LLMs strukturieren die Eignungskriterientexte in eine AST-Struktur im JSON-Format.


Die Ordnerstruktur der Arbeit ist wie folgt aufgebaut. 
Jeder lct-Ordner enthält eine README.md Datei, die die Funktionalität des Ordners beschreibt.
Die Struktur der chia-Ordner ist analog zu den lct-Ordnern.



1. chia  (nur für die indirekte Strukturierung)
   - evaluate: Modellausgaben und Evaluierungsfunktionen
   - input: Chia-Testdaten, Prompts 
   - models: LCT-Modelle 
   - transform_chia: Preprocessing der Chia-Daten


2. lct (direkte und indirekte Strukturierung)
   - evaluate: Modellausgaben und Evaluierungsfunktionen
   - input: Trainings- Testdaten, Prompts 
   - models: Fine-Tuning Funktionen, Verwendetet LLMs 
   - transform_lct: Preprocessing der LCT-Daten


3. parser
    - AST_Parser: Verarbeitet die Ausgaben der indirekten Strukturierung als AST-Stuktur im JSON-Format.
    - AST_Plotter: Plottet AST-Strukturen von Eignungskriterien.
    - Fhir_Parser: Zukünftige Implementierung eines Parsers von JSON-Dateien mit AST-Struktur in ein FHIR-Format.
    - JSON_Parser: Fügt die AST-Strukturen von Ein- und Ausschlusskriterien als ein Baum über ein AND-Knoten zusammen. 


4. zusatz
   - auswertungen: Ergänzende Evaluationen der Modelle in Latex-Tabellen.
   - korpora: alle öffentlich verfügbaren Korporas mit Eignungskriterien. 