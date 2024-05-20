import json
import os
import pandas as pd
import re
import shutil
from collections import defaultdict
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, confusion_matrix
from functions import *
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

def extract_words(raw_texts):
    words = set()
    for text in raw_texts:
        words.update(text.split())
    return words