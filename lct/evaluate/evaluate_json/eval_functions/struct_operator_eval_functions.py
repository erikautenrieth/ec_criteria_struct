import shutil
import json
import re
import os
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

def find_operator_words_function1(text, operators):
    words = {op: [] for op in operators}
    word_list = text.split()
    for i, word in enumerate(word_list):
        if word in ["[AND]", "[OR]", "[NOT]"]:
            operator = word[1:-1]
            if operator in ['AND', 'OR', 'NOT'] and i - 1 >= 0: # Wort vor dem Operator
                prev_word = re.sub(r'[^\w]', '', word_list[i - 1])  # Entferne Satzzeichen
                words[operator].append(prev_word)
    return words

def clean_criteria_text(edited_text):
    cleaned_text = re.sub(r'\[AND\]|\[OR\]|\[NOT\]', '', edited_text)
    cleaned_text = re.sub(r'<EDITED_CRITERIA>|</EDITED_CRITERIA>', '', cleaned_text)
    cleaned_text = cleaned_text.strip()
    return cleaned_text
def calculate_metrics(tp, fp, fn):
    precision = tp / (tp + fp) if tp + fp > 0 else 0
    recall = tp / (tp + fn) if tp + fn > 0 else 0
    f1 = 2 * (precision * recall) / (precision + recall) if precision + recall > 0 else 0
    accuracy = tp / (tp + fn) if tp + fn > 0 else 0
    return precision, recall, f1, accuracy

def compare_texts(raw_text, model_text):
    raw_text_words = raw_text.split()
    model_text_words = model_text.split()
    raw_word_count = Counter(raw_text_words)
    model_word_count = Counter(model_text_words)
    # Calculate missing words and their counts
    missing_words = raw_word_count - model_word_count
    total_words = sum(raw_word_count.values())
    missing_word_count = sum(missing_words.values())
    if total_words == 0:
        missing_percentage = 0
    else:
        missing_percentage = (missing_word_count / total_words) * 100

    return missing_words, missing_percentage

def calculate_aggregated_results(metrics, processed_label_files, total_missing_pct, operators):
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
            'low_tp_ncts': list(metrics[op]['low_tp_ncts'])
        }
    average_missing_percentage = total_missing_pct / processed_label_files if processed_label_files > 0 else 0
    results['average_missing_percentage'] = average_missing_percentage
    avg_metrics = {metric: sum(results[op][metric] for op in operators) / len(operators) for metric in ['precision', 'recall', 'f1', 'accuracy']}
    results['average'] = avg_metrics
    return results

def get_models(root_folder):
    valid_subfolders = []
    for subfolder_name in os.listdir(root_folder):
        subfolder_path = os.path.join(root_folder, subfolder_name)
        if os.path.isdir(subfolder_path):
            output_folder_path = os.path.join(subfolder_path, 'output')
            if os.path.isdir(output_folder_path) and os.listdir(output_folder_path):
                valid_subfolders.append(subfolder_name)
    return valid_subfolders

def read_and_process_files(model_path, model_name):
    model_folder = f"{model_path}/{model_name}/output"
    ready_folder = f"{model_path}/{model_name}/ready"
    failure_folder = f"{model_path}/{model_name}/structure_failure"
    failure_folder2 = f"{model_path}/{model_name}/failure"
    for folder in [ready_folder, failure_folder, failure_folder2]:
        os.makedirs(folder, exist_ok=True)
    files_to_failure(directory_path=ready_folder, failure_directory=failure_folder2)
    def visit(node, category, entities):
        if isinstance(node, dict):
            if category in node:
                entities.extend(node[category])
            for value in node.values():
                visit(value, category, entities)
        elif isinstance(node, list):
            for item in node:
                visit(item, category, entities)
    for filename in os.listdir(model_folder):
        if filename.endswith(".json"):
            file_path = os.path.join(model_folder, filename)
            try:
                with open(file_path, 'r', encoding="utf-8") as file:
                    data = json.load(file)
                entities = []
                visit(data, 'category', entities)
                try:
                    output_text = json_to_text_failure(file_path)
                    shutil.copy(file_path, ready_folder)
                except Exception as e:
                    shutil.copy(file_path, os.path.join(failure_folder2, filename))
                    continue
            except json.JSONDecodeError as je:
                shutil.copy(file_path, failure_folder)
            except Exception as e:
                shutil.copy(file_path, failure_folder)




### Diese Funktionen sind nur für die Failure Ausgabe
def process_node_failure(node):
    if 'raw_text' in node:
        return node['raw_text'].strip()

    if 'AND' in node:
        left_text = process_node_failure(node['AND']['left'])
        right_text = process_node_failure(node['AND']['right'])
        return combine_texts_failure(left_text, right_text, '[AND]')

    if 'OR' in node:
        left_text = process_node_failure(node['OR']['left'])
        right_text = process_node_failure(node['OR']['right'])
        return combine_texts_failure(left_text, right_text, '[OR]')

    if 'NOT' in node:
        left_text = process_node_failure(node['NOT']['left'])
        return f"[NOT] {left_text}"
    return ""

def combine_texts_failure(left_text, right_text, operator):
    return f"{left_text} {operator} {right_text}"

def json_to_text_failure(json_file_path):
    with open(json_file_path, 'r', encoding="utf-8") as f:
        data = json.load(f)
    text = process_node_failure(data)
    lines = [line.strip() for line in text.split('\n') if line.strip()]
    return '\n'.join(lines)

def files_to_failure(directory_path, failure_directory):
    os.makedirs(failure_directory, exist_ok=True)
    for filename in os.listdir(directory_path):
        if filename.endswith("_exc.json") or filename.endswith("_inc.json"):
            json_file_path = os.path.join(directory_path, filename)
            try:
                output_text = json_to_text_failure(json_file_path)
            except Exception as e:
                shutil.move(json_file_path, os.path.join(failure_directory, filename))



def extract_file_name(filename):
    pattern = r'NCT(\d+)_(inc|exc)'
    match = re.search(pattern, filename)
    if match:
        nct_number = 'NCT' + match.group(1)
        suffix = match.group(2)
        return f"{nct_number}_{suffix}"
    else:
        return None

def find_operator_words(text, operators):
    words = {op: [] for op in operators}
    word_list = text.split()
    for i, word in enumerate(word_list):
        if word in ["[AND]", "[OR]", "[NOT]", "[AND1]"]:
            operator = word[1:-1]
            if operator in operators:
                j = i - 1
                while j >= 0 and word_list[j] in ["[AND]", "[OR]", "[NOT]", "[AND1]"]:
                    j -= 1
                if j >= 0:
                    prev_word = re.sub(r'[^\w]', '', word_list[j])  # Remove punctuation
                    words[operator].append(prev_word)
    return words

def compare_operators(label_text, model_text, operator):
    label_operators = extract_operators(label_text) + ['AND1']
    model_operators = extract_operators(model_text)
    label_words_dict = find_operator_words(label_text, label_operators)
    model_words_dict = find_operator_words(model_text, model_operators)
    tp = 0
    fp = 0
    fn = 0
    label_count = 0
    model_word_count = 0
    if operator in ['AND', 'AND1']:
        label_words_and = label_words_dict.get('AND', [])
        label_words_and1 = label_words_dict.get('AND1', [])
        model_words = model_words_dict.get('AND', [])
        model_word_count = len(model_words)
        print("Label AND:", label_words_and)
        print("Label AND1:", label_words_and1)
        print("Model  AND:", model_words)
        for word in model_words:
            if operator == 'AND':
                if word in label_words_and:
                    tp += 1
                elif word not in label_words_and1:
                    fp += 1
            elif operator == 'AND1':
                if word in label_words_and1:
                    tp += 1
                elif word not in label_words_and:
                    fp += 1
        if operator == 'AND':
            fn = sum(1 for word in label_words_and if word not in model_words)
            label_count = len(label_words_and)
        else:  # AND1
            fn = sum(1 for word in label_words_and1 if word not in model_words)
            label_count = len(label_words_and1)
    else:  # OR und NOT
        label_words = label_words_dict.get(operator, [])
        model_words = model_words_dict.get(operator, [])
        tp = sum(1 for word in label_words if word in model_words)
        fp = sum(1 for word in model_words if word not in label_words)
        fn = sum(1 for word in label_words if word not in model_words)
        label_count = len(label_words)
        model_word_count = len(model_words)
    if operator == "AND" or operator == "AND1":
        print(operator)
        print(f"TP: {tp}, FP: {fp}, FN: {fn}, Label count: {label_count}, Model count: {model_word_count}")
    return tp, fp, fn, label_count, model_word_count

def evaluate_models(label_folder, model_folder, model_name, raw_lct_text_folder):
    operators = ['AND', 'AND1', 'OR', 'NOT']
    metrics = {op: {'tp': 0, 'fp': 0, 'fn': 0, 'label_count': 0, 'model_count': 0, 'correct_count': 0, 'correct_ncts': set(), 'low_tp_ncts': set()} for op in operators}
    processed_label_files = 0
    total_missing_words = Counter()
    total_missing_pct = 0.0
    model_results = []
    label_files = {f.split('.')[0]: os.path.join(label_folder, f) for f in os.listdir(label_folder) if f.endswith('.txt')}
    for model_file in os.listdir(model_folder):
        if model_file.endswith('.txt'):
            identifier = extract_file_name(model_file)
            print(identifier)
            if identifier in label_files:
                label_file_path = label_files[identifier]
                model_file_path = os.path.join(model_folder, model_file)
                raw_lct_text_path = os.path.join(raw_lct_text_folder, f'{identifier}.txt')
                if os.path.exists(label_file_path):
                    processed_label_files += 1
                    label_text = read_file(label_file_path)
                    model_text = read_file(model_file_path)
                    raw_lct_text = read_file(raw_lct_text_path)
                    model_raw_text = clean_criteria_text(model_text)
                    missing_words, missing_percentage = compare_texts(raw_lct_text, model_raw_text)
                    total_missing_pct += missing_percentage
                    total_missing_words.update(missing_words)
                    model_data = {'nct_number': identifier}
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
                            metrics[op]['correct_ncts'].add(identifier)
                        if tp == 0 and fn > 4:
                            metrics[op]['low_tp_ncts'].add(identifier)
                    model_results.append(model_data)
    results = calculate_aggregated_results(metrics, processed_label_files, total_missing_pct, operators)
    return results