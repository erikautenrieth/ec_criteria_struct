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
    failure_folder = f"model_output/{model_name}/failure"
    os.makedirs(ready_folder, exist_ok=True)
    os.makedirs(failure_folder, exist_ok=True)

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
                shutil.copy(file_path, ready_folder)
            except Exception as e:
                shutil.copy(file_path, failure_folder)
                #print(f"Error processing file {filename}: {e}")


### Count failed files and plot
def count_files(model_name):
    model_folder = f"model_output/{model_name}/output"
    ready_folder = f"model_output/{model_name}/ready"
    failure_folder = f"model_output/{model_name}/failure"

    def count_files_in_folder(folder):
        if os.path.exists(folder):
            return len([f for f in os.listdir(folder) if os.path.isfile(os.path.join(folder, f))])
        return 0

    model_folder_count = count_files_in_folder(model_folder)
    ready_folder_count = count_files_in_folder(ready_folder)
    failure_folder_count = count_files_in_folder(failure_folder)

    return model_folder_count, ready_folder_count, failure_folder_count

def plot_file_counts(model_name):
    model_folder_count, ready_folder_count, failure_folder_count = count_files(model_name)
    total_files = model_folder_count

    categories = ['Output', 'Ready', 'Failure']
    counts = [model_folder_count, ready_folder_count, failure_folder_count]

    width = 0.35
    x = np.arange(len(categories))

    fig, ax = plt.subplots(figsize=(10, 6))
    bars = ax.bar(x, counts, width, color=['blue', 'green', 'red'])
    ax.set_xlabel('Kategorien', labelpad=15)
    ax.set_ylabel('Anzahl der Dateien', labelpad=15)
    ax.set_title('Anzahl der Dateien in den Verzeichnissen', pad=20)
    ax.set_xticks(x)
    ax.set_xticklabels(categories)
    ax.legend(['Output', 'Ready', 'Failure'], loc='upper right')
    ax.grid(True, linestyle='--', alpha=0.7)

    for i, (bar, count) in enumerate(zip(bars, counts)):
        height = bar.get_height()
        if i == 0:
            percentage = 100
        else:
            percentage = (count / total_files) * 100 if total_files > 0 else 0
        ax.annotate(f'{count} ({percentage:.1f}%)',
                    xy=(bar.get_x() + bar.get_width() / 2, height),
                    xytext=(0, 3),
                    textcoords="offset points",
                    ha='center', va='bottom')


    plt.show()


def plot_entitys(metrics):
    categories = list(metrics.keys())
    total_label_entities = [metrics[cat]['total_label_entities'] for cat in categories]
    total_model_entities = [metrics[cat]['total_model_entities'] for cat in categories]

    x = np.arange(len(categories))
    width = 0.35

    fig, ax = plt.subplots(figsize=(10, 6))
    rects1 = ax.bar(x - width/2, total_label_entities, width, label='Gesamte Label-Entitäten', color='darkblue')
    rects2 = ax.bar(x + width/2, total_model_entities, width, label='Gesamte Modell-Entitäten', color='lightcoral')

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

    plt.show()

def plot_metrics(model_name, metrics, categories):
    fig, ax = plt.subplots(figsize=(8, 6))

    x = np.arange(len(categories))
    width = 0.25

    precision_scores = [metrics[category]['precision'] * 100 for category in categories]
    recall_scores = [metrics[category]['recall'] * 100 for category in categories]
    f1_scores = [metrics[category]['f1'] * 100 for category in categories]

    ax.bar(x - width, precision_scores, width, label='Precision')
    ax.bar(x, recall_scores, width, label='Recall')
    ax.bar(x + width, f1_scores, width, label='F1-Score')

    scores = zip(precision_scores, recall_scores, f1_scores)
    for i, (p, r, f1) in enumerate(scores):
        ax.text(i - width, p + 1, f'{p:.1f}%', ha='center', fontsize=10)
        ax.text(i, r + 1, f'{r:.1f}%', ha='center', fontsize=10)
        ax.text(i + width, f1 + 1, f'{f1:.1f}%', ha='center', fontsize=10)

        ax.text(i - width, p/2, 'P', ha='center', va='center', fontsize=12, color='white')
        ax.text(i, r/2, 'R', ha='center', va='center', fontsize=12, color='white')
        ax.text(i + width, f1/2, 'F1', ha='center', va='center', fontsize=12, color='white')

    ax.set_xlabel('Category')
    ax.set_ylabel('Score (%)')
    ax.set_title(f'P3: {model_name}')
    ax.set_xticks(x)
    ax.set_xticklabels(categories)
    ax.legend()

    ax.set_ylim(0, 110)
    ax.grid(True)

    plt.tight_layout()
    plt.show()