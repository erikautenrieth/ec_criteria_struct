import os
import shutil
import json
import re
import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns
import pandas as pd
from sklearn.metrics import confusion_matrix, classification_report



def get_models(root_folder):
    valid_subfolders = []
    for subfolder_name in os.listdir(root_folder):
        subfolder_path = os.path.join(root_folder, subfolder_name)
        if os.path.isdir(subfolder_path):
            output_folder_path = os.path.join(subfolder_path, 'output')
            if os.path.isdir(output_folder_path) and os.listdir(output_folder_path):
                valid_subfolders.append(subfolder_name)
    return valid_subfolders

def read_and_process_files(model_name):
    model_folder = f"model_output/{model_name}/output"
    ready_folder = f"model_output/{model_name}/ready"
    failure_folder = f"model_output/{model_name}/structure_failure"
    failure_folder2 = f"model_output/{model_name}/failure"

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
                    print(f"Successfully processed {filename}")
                    shutil.copy(file_path, ready_folder)
                except Exception as e:
                    print(f"Failed to process file: {filename} - Error: {e}")
                    shutil.copy(file_path, os.path.join(failure_folder2, filename))
                    continue

            except json.JSONDecodeError as je:
                print(f"JSON syntax error in file: {filename} - Error: {je}")
                shutil.copy(file_path, failure_folder)
            except Exception as e:
                print(f"Unexpected error reading file: {filename} - Error: {e}")
                shutil.copy(file_path, failure_folder)



### Count failed files and plot
def count_files(model_name):
    model_folder = f"model_output/{model_name}/output"
    ready_folder = f"model_output/{model_name}/ready"
    failure_folder = f"model_output/{model_name}/failure"
    struct_failure_folder = f"model_output/{model_name}/structure_failure"

    def count_files_in_folder(folder):
        if os.path.exists(folder):
            return len([f for f in os.listdir(folder) if os.path.isfile(os.path.join(folder, f))])
        return 0

    model_folder_count = count_files_in_folder(model_folder)
    ready_folder_count = count_files_in_folder(ready_folder)
    failure_folder_count = count_files_in_folder(failure_folder)
    struct_failure_folder_count = count_files_in_folder(struct_failure_folder)

    return model_folder_count, ready_folder_count, failure_folder_count, struct_failure_folder_count

def plot_file_counts(model_name):
    model_folder_count, ready_folder_count, failure_folder_count, struct_failure_folder_count = count_files(model_name)
    total_files = model_folder_count

    categories = ['Ausgabe', 'Korrekt', 'Parse Fehler', 'Struktur Fehler']
    counts = [model_folder_count, ready_folder_count, failure_folder_count, struct_failure_folder_count]

    width = 0.35
    x = np.arange(len(categories))

    fig, ax = plt.subplots(figsize=(12, 6))
    colors = ['#1f77b4', '#2ca02c', '#d62728', '#e377c2']  # Blau, Grün, Rot, Rosa
    bars = ax.bar(x, counts, width, color=colors)

    ax.set_xlabel('Kategorien', labelpad=15, fontsize=12)
    ax.set_ylabel('Anzahl der Dateien', labelpad=15, fontsize=12)
    ax.set_title(f'Ausgabe {model_name}', pad=20, fontsize=14)
    ax.set_xticks(x)
    ax.set_xticklabels(categories, fontsize=10)
    #ax.legend(['Ausgabe', 'Korrekt', 'Parse Fehler', 'Struktur Fehler'], loc='upper right', fontsize=10)
    ax.grid(True, linestyle='--', alpha=0.7)

    for i, (bar, count) in enumerate(zip(bars, counts)):
        height = bar.get_height()
        if i == 0:
            percentage = 100
        else:
            percentage = (count / total_files) * 100
        ax.annotate(f'{count} ({percentage:.1f}%)',
                    xy=(bar.get_x() + bar.get_width() / 2, height),
                    xytext=(0, 3),
                    textcoords="offset points",
                    ha='center', va='bottom', fontsize=9)

    plt.tight_layout()
    plt.savefig(f'pics/file_counts_{model_name}.png', dpi=300, bbox_inches='tight')
    plt.show()


def plot_entitys(metrics, model_name):
    categories = list(metrics.keys())
    total_label_entities = [metrics[cat]['total_label_entities'] for cat in categories]
    total_model_entities = [metrics[cat]['total_model_entities'] for cat in categories]

    x = np.arange(len(categories))
    width = 0.35

    fig, ax = plt.subplots(figsize=(10, 6))
    rects1 = ax.bar(x - width/2, total_label_entities, width, label='Gesamte Label Entitäten', color='darkblue')
    rects2 = ax.bar(x + width/2, total_model_entities, width, label='Gesamte Modell Entitäten', color='lightcoral')

    ax.set_xlabel('Kategorien', labelpad=15)
    ax.set_ylabel('Anzahl der Entitäten', labelpad=15)
    ax.set_title('Anzahl der Entitäten in Labels und Model Outputs nach Kategorien', pad=20)
    ax.set_xticks(x)
    ax.set_xticklabels(categories)
    ax.legend()
    ax.grid(True, linestyle='--', alpha=0.7)

    def autolabel(rects):
        for rect in rects:
            height = rect.get_height()
            ax.annotate(f'{height}', xy=(rect.get_x() + rect.get_width() / 2, height),
                        xytext=(0, 3), textcoords="offset points", ha='center', va='bottom')

    autolabel(rects1)
    autolabel(rects2)
    plt.tight_layout()
    plt.savefig(f'pics/entitys_{model_name}.png')
    plt.show()



def plot_metrics(model_name, metrics, categories):
    fig, ax = plt.subplots(figsize=(10, 7))

    x = np.arange(len(categories))
    width = 0.2  # Adjusted width to fit both sets of bars

    # Extracting metrics
    precision_scores = [metrics[category]['precision'] * 100 for category in categories]
    recall_scores = [metrics[category]['recall'] * 100 for category in categories]
    f1_scores = [metrics[category]['f1'] * 100 for category in categories]
    scibert_metrics = {
        'Condition': {'precision': 78.4, 'recall': 83.3, 'f1': 80.8},
        'Drug': {'precision': 73.4, 'recall': 80.9, 'f1': 77.0},
        'Observation': {'precision': 72.1, 'recall': 77.6, 'f1': 74.7}
    }
    scibert_precision_scores = [scibert_metrics[category]['precision'] for category in categories]
    scibert_recall_scores = [scibert_metrics[category]['recall'] for category in categories]
    scibert_f1_scores = [scibert_metrics[category]['f1'] for category in categories]

    # Plotting the provided model's metrics
    ax.bar(x - 1.5 * width, precision_scores, width, label=f'{model_name} Precision')
    ax.bar(x - 0.5 * width, recall_scores, width, label=f'{model_name} Recall')
    ax.bar(x + 0.5 * width, f1_scores, width, label=f'{model_name} F1-Score')

    # Plotting the SciBERT metrics
    ax.bar(x + 1.5 * width, scibert_precision_scores, width, label='SciBERT Precision', color='gray', alpha=0.6)
    ax.bar(x + 2.5 * width, scibert_recall_scores, width, label='SciBERT Recall', color='gray', alpha=0.6)
    ax.bar(x + 3.5 * width, scibert_f1_scores, width, label='SciBERT F1-Score', color='gray', alpha=0.6)

    # Adding text labels
    for i in range(len(categories)):
        ax.text(i - 1.5 * width, precision_scores[i] + 1, f'{precision_scores[i]:.1f}%', ha='center', fontsize=10)
        ax.text(i - 0.5 * width, recall_scores[i] + 1, f'{recall_scores[i]:.1f}%', ha='center', fontsize=10)
        ax.text(i + 0.5 * width, f1_scores[i] + 1, f'{f1_scores[i]:.1f}%', ha='center', fontsize=10)

        ax.text(i + 1.5 * width, scibert_precision_scores[i] + 1, f'{scibert_precision_scores[i]:.1f}%', ha='center', fontsize=10)
        ax.text(i + 2.5 * width, scibert_recall_scores[i] + 1, f'{scibert_recall_scores[i]:.1f}%', ha='center', fontsize=10)
        ax.text(i + 3.5 * width, scibert_f1_scores[i] + 1, f'{scibert_f1_scores[i]:.1f}%', ha='center', fontsize=10)

    ax.set_xlabel('Category')
    ax.set_ylabel('Score (%)')
    ax.set_title(f'{model_name} vs SciBERT Metrics by Category')
    ax.set_xticks(x)
    ax.set_xticklabels(categories)
    ax.legend()

    ax.set_ylim(0, 110)
    ax.grid(True)

    plt.tight_layout()
    plt.show()



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
                print(f"Failed to process file: {filename} - Error: {e}")
                shutil.move(json_file_path, os.path.join(failure_directory, filename))
                print(os.path.join(failure_directory, filename))