import re
import os
import numpy as np
import pandas as pd
from collections import Counter

def read_file(file_path):
    with open(file_path, 'r', encoding="utf-8") as file:
        return file.read()

def extract_nct_number(filename):
    match = re.search(r'(NCT\d+)', filename)
    return match.group(1) if match else None
def extract_operators(text):
    operators = re.findall(r'\[(AND|OR|NOT)\]', text)
    return operators

def find_operator_words(text, operators):
    words = {op: [] for op in operators}
    word_list = text.split()
    for i, word in enumerate(word_list):
        if word in ["[AND]", "[OR]", "[NOT]"]:
            operator = word[1:-1]
            if operator in ['AND', 'OR', 'NOT'] and i - 1 >= 0: # Wort vor dem Operator
                prev_word = re.sub(r'[^\w]', '', word_list[i - 1])  # Entferne Satzzeichen
                words[operator].append(prev_word)
    return words

def compare_operators(label_text, model_text, operator):
    label_operators = extract_operators(label_text)
    model_operators = extract_operators(model_text)

    label_words_dict = find_operator_words(label_text, label_operators)
    model_words_dict = find_operator_words(model_text, model_operators)



    label_words = label_words_dict.get(operator, [])
    model_words = model_words_dict.get(operator, [])
    #print("label_words_dict",label_words)
    #print("model_words_dict",model_words)
    #print([word for word in label_words if word in model_words])

    tp = sum(1 for word in label_words if word in model_words)
    fp = sum(1 for word in model_words if word not in label_words)
    fn = sum(1 for word in label_words if word not in model_words)

    return tp, fp, fn, len(label_words), len(model_words)

def calculate_metrics(tp, fp, fn):
    precision = tp / (tp + fp) if tp + fp > 0 else 0
    recall = tp / (tp + fn) if tp + fn > 0 else 0
    f1 = 2 * (precision * recall) / (precision + recall) if precision + recall > 0 else 0
    accuracy = tp / (tp + fn) if tp + fn > 0 else 0
    return precision, recall, f1, accuracy

def clean_criteria_text(edited_text):
    # Remove logical operators and tags
    cleaned_text = re.sub(r'\[AND\]|\[OR\]|\[NOT\]', '', edited_text)
    cleaned_text = re.sub(r'<EDITED_CRITERIA>|</EDITED_CRITERIA>', '', cleaned_text)
    # Strip leading and trailing whitespaces
    cleaned_text = cleaned_text.strip()
    return cleaned_text

def compare_texts(raw_text, model_text):
    # Normalize and tokenize text for comparison
    raw_text_words = raw_text.split()
    model_text_words = model_text.split()

    raw_word_count = Counter(raw_text_words)
    model_word_count = Counter(model_text_words)

    # Calculate missing words and their counts
    missing_words = raw_word_count - model_word_count

    zuviel_words = model_word_count - raw_word_count

    total_words = sum(raw_word_count.values())
    missing_word_count = sum(missing_words.values())
    missing_percentage = (missing_word_count / total_words) * 100
    zuviel_words_pct = (sum(zuviel_words.values()) / total_words) * 100

    return missing_words, missing_percentage, zuviel_words, zuviel_words_pct

def evaluate_models(label_folder, model_folder, model_name, raw_lct_text_folder, output_folder="excel_eval"):
    operators = ['AND', 'OR', 'NOT']
    metrics = {op: {'tp': 0, 'fp': 0, 'fn': 0, 'label_count': 0, 'model_count': 0, 'correct_count': 0, 'correct_ncts': set(), 'low_tp_ncts': set()} for op in operators}
    processed_label_files = 0
    total_missing_words = Counter()
    total_zuviel_words = Counter()
    total_missing_pct = 0.0
    total_zuviel_pct = 0.0
    model_results = []

    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    for model_file in os.listdir(model_folder):
        if model_file.endswith('.txt'):
            nct_number = extract_nct_number(model_file)
            if nct_number:
                #print(nct_number)
                label_file_path = os.path.join(label_folder, f'{nct_number}.txt')
                model_file_path = os.path.join(model_folder, model_file)
                raw_lct_text_path = os.path.join(raw_lct_text_folder, f'{nct_number}.txt')

                if os.path.exists(label_file_path):
                    processed_label_files += 1
                    label_text = read_file(label_file_path)
                    model_text = read_file(model_file_path)
                    raw_lct_text = read_file(raw_lct_text_path)

                    model_raw_text = clean_criteria_text(model_text)
                    missing_words, missing_percentage, zuviel_words, zuviel_words_pct = compare_texts(raw_lct_text, model_raw_text)
                    total_missing_pct += missing_percentage
                    total_zuviel_pct += zuviel_words_pct
                    total_missing_words.update(missing_words)
                    total_zuviel_words.update(zuviel_words)

                    model_data = {'nct_number': nct_number}

                    for op in operators:
                        tp, fp, fn, label_count, model_count = compare_operators(label_text, model_text, op)

                        metrics[op]['tp'] += tp
                        metrics[op]['fp'] += fp
                        metrics[op]['fn'] += fn
                        metrics[op]['label_count'] += label_count
                        metrics[op]['model_count'] += model_count
                        metrics[op]['correct_count'] += tp

                        model_data[f'{op}_tp'] = tp
                        model_data[f'{op}_fp'] = fp
                        model_data[f'{op}_fn'] = fn
                        model_data[f'{op}_label_count'] = label_count
                        model_data[f'{op}_model_count'] = model_count

                        if tp > 0:
                            metrics[op]['correct_ncts'].add(nct_number)
                        if tp == 0 and fn > 4:
                            metrics[op]['low_tp_ncts'].add(nct_number)

                    model_results.append(model_data)

    results = {}
    for op in operators:
        precision, recall, f1, accuracy = calculate_metrics(metrics[op]['tp'], metrics[op]['fp'], metrics[op]['fn'])
        results[op] = {
            'precision': precision * 100,
            'recall': recall * 100,
            'f1': f1 * 100,
            'accuracy': accuracy * 100,
            'total_label': metrics[op]['label_count'],
            'total_model': metrics[op]['model_count'],
            'correct_count': metrics[op]['correct_count'],
            'low_tp_ncts': list(metrics[op]['low_tp_ncts'])  # Konvertiere das Set zurück in eine Liste für die Ausgabe
        }

    average_missing_percentage = total_missing_pct / processed_label_files if processed_label_files > 0 else 0
    average_zuviel_percentage = total_zuviel_pct / processed_label_files if processed_label_files > 0 else 0

    results['average_missing_percentage'] = average_missing_percentage
    results['average_zuviel_percentage'] = average_zuviel_percentage
    results['total_missing_words'] = total_missing_words
    results['total_zuviel_words'] = total_zuviel_words

    avg_metrics = {'precision': 0, 'recall': 0, 'f1': 0, 'accuracy': 0}
    for metric in avg_metrics.keys():
        avg_metrics[metric] = sum(results[op][metric] for op in operators) / len(operators)

    results['average'] = avg_metrics

    #df_results = pd.DataFrame(model_results)
    #excel_path = os.path.join(output_folder, f'{model_name}_evaluation_results.xlsx')
    #df_results.to_excel(excel_path, index=False)

    return results
