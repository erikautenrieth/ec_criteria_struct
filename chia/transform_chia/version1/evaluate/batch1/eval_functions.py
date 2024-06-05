import json
import os
import pandas as pd
import re
import shutil
from collections import defaultdict
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, confusion_matrix
import os
import json
import shutil
import nltk
from statistics import mean


def find_folders_with_output(directory):
    folders_with_output = []
    for root, dirs, files in os.walk(directory):
        if 'output' in dirs:
            print(root)
            folders_with_output.append(root.split('\\')[1]) # Linux: /
            dirs.remove('output')
    return folders_with_output


def extract_nct_number(filename):
    parts = filename.split('_')
    nct_number = None
    file_type = None
    for part in parts:
        if part.startswith("NCT"):
            nct_number = part
        if part in ["inc", "exc"]:
            file_type = part
    return nct_number+"_"+file_type


def extract_logical_structure(data):
    structure = defaultdict(int)
    def traverse(node, depth=0):
        nonlocal structure
        structure["depth"] = max(structure["depth"], depth)

        if isinstance(node, dict):
            for key in node:
                if key in ["AND", "OR", "NOT"]:
                    structure[key] += 1
                traverse(node[key], depth + 1)
        elif isinstance(node, list):
            for item in node:
                traverse(item, depth + 1)

    traverse(data)
    return dict(structure)

def extract_raw_texts(data):
    raw_texts = set()
    def traverse(node):
        if isinstance(node, dict):
            for key, value in node.items():
                if key == "raw_text":
                    raw_texts.add(value)
                else:
                    traverse(value)
        elif isinstance(node, list):
            for item in node:
                traverse(item)

    traverse(data)
    return raw_texts

def clean_text(text):
    # Entferne alle Sonderzeichen und Zahlen, behalte nur Buchstaben und Leerzeichen
    return re.sub(r'[^a-zA-Z\s]', '', text)

def extract_words(text_set):
    words = set()
    for text in text_set:
        clean_words = clean_text(text).split()
        words.update(clean_words)
    return words

def read_json(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return data

## Jakard und BLEUE
def jaccard_similarity(output1, output2):
    set1 = set(output1)
    set2 = set(output2)
    intersection = len(set1.intersection(set2))
    union = len(set1.union(set2))
    return intersection / union

def calculate_bleu(reference, hypothesis):
    reference = [reference]
    hypothesis = hypothesis
    reference_tokens = [nltk.word_tokenize(ref) for ref in reference]
    hypothesis_tokens = nltk.word_tokenize(hypothesis)
    # Berechne den BLEU-Score
    bleu_score = nltk.translate.bleu_score.sentence_bleu(reference_tokens, hypothesis_tokens)

    return bleu_score

def json_to_text(data):
    if isinstance(data, dict):
        if "AND" in data:
            left = json_to_text(data["AND"]["left"])
            right = json_to_text(data["AND"]["right"])
            return f"({left} AND {right})"
        elif "OR" in data:
            left = json_to_text(data["OR"]["left"])
            right = json_to_text(data["OR"]["right"])
            return f"({left} OR {right})"
        elif "NOT" in data:
            inner = json_to_text(data["NOT"]["left"])
            return f"(NOT {inner})"
        elif "raw_text" in data:
            return data["raw_text"]
    return ""