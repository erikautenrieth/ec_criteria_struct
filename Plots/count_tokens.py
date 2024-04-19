import nltk
from nltk.tokenize import word_tokenize

# Sicherstellen, dass der Tokenizer heruntergeladen ist
nltk.download('punkt')

def count_words_and_tokens(text):
    # Tokenisieren des Textes, was auch Interpunktion als Tokens betrachtet
    tokens = word_tokenize(text)
    num_tokens = len(tokens)

    # Zählen der Wörter, indem Tokens, die keine Buchstaben enthalten, ausgeschlossen werden
    words = [token for token in tokens if token.isalpha()]
    num_words = len(words)

    return num_tokens, num_words

# Beispieltext
text = """
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
"""


num_tokens, num_words = count_words_and_tokens(text)
print(f"Anzahl der Tokens: {num_tokens}")
print(f"Anzahl der Wörter: {num_words}")
