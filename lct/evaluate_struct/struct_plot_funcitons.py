import os
import re
import os
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sns

from sklearn.metrics import precision_score, recall_score, f1_score, accuracy_score

def plot_metrics(all_metrics):
    operators = ['AND', 'OR', 'NOT']
    metrics_to_plot = ['precision', 'recall', 'f1']

    fig, axs = plt.subplots(len(operators), 1, figsize=(12, 24), gridspec_kw={'hspace': 1.2})

    for i, op in enumerate(operators):
        ax = axs[i]

        model_names = []
        metric_values = {metric: [] for metric in metrics_to_plot}

        for model, model_metrics in all_metrics.items():
            model_name = model.replace("Instruct_", "")
            model_names.append(model_name)
            for metric in metrics_to_plot:
                metric_values[metric].append(model_metrics[op][metric])

        x = np.arange(len(model_names))
        bar_width = 0.2
        opacity = 0.8

        for j, metric in enumerate(metrics_to_plot):
            ax.bar(x + j * bar_width, metric_values[metric], bar_width, alpha=opacity, label=metric.capitalize())

        ax.set_xticks(x + bar_width * (len(metrics_to_plot) - 1) / 2)
        ax.set_xticklabels(model_names, rotation=45, ha='right', fontsize=12)
        ax.set_xlabel('Models', fontsize=12)
        ax.set_ylabel('Score (%)', fontsize=12)
        ax.set_ylim(0, 100)
        ax.set_title(f'Evaluation: {op}', fontsize=16, pad=20)
        ax.legend(fontsize=11)
        ax.grid(True)

        for j, metric in enumerate(metrics_to_plot):
            for k, v in enumerate(metric_values[metric]):
                ax.text(k + j * bar_width, v + 1, f'{v:.1f}%', ha='center', fontsize=10)

    plt.show()



def plot_count_comparison(all_metrics):
    operators = ['AND', 'OR', 'NOT']
    count_metrics = ['total_label', 'total_model']
    fig, ax = plt.subplots(figsize=(12, 8))
    x = np.arange(len(operators))

    label_counts = [all_metrics[next(iter(all_metrics))][op]['total_label'] for op in operators]
    bar_width = 0.16
    opacity = 0.8

    colors = sns.color_palette("husl", len(all_metrics) + 1)

    ax.bar(x, label_counts, bar_width, alpha=opacity, color=colors[0], label='Label Count')
    for i, model in enumerate(all_metrics.keys()):
        count_values = [all_metrics[model][op]['total_model'] for op in operators]
        model_name = model.replace('Instruct', '').replace('_', ' ')
        ax.bar(x + (i + 1) * bar_width, count_values, bar_width, alpha=opacity, color=colors[i + 1], label=model_name)

        for j, v in enumerate(count_values):
            label_count = label_counts[j]
            diff_percent = ((v - label_count) / label_count) * 100
            color = 'darkgreen' if diff_percent >= 0 else 'red'
            ax.text(x[j] + (i + 1) * bar_width, v / 2, f'{diff_percent:+.0f}%', ha='center', va='center', fontsize=10, color=color, fontweight='bold')
            ax.text(x[j] + (i + 1) * bar_width, v + 100, str(v), ha='center', fontsize=11)

    for i, v in enumerate(label_counts):
        ax.text(x[i], v + 100, str(v), ha='center', fontsize=10)

    ax.set_xticks(x + bar_width * len(all_metrics) / 2)
    ax.set_xticklabels([f'{op}' for op in operators], fontsize=12)
    ax.set_xlabel('Operators', fontsize=12)
    ax.set_ylabel('Anzahl', fontsize=12)
    ax.set_title('Count Comparison: Labels vs Models per Operator', fontsize=16, pad=30)
    ax.legend(fontsize=11)
    ax.grid(True)

    plt.tight_layout()
    plt.show()



def plot_metrics(model_name, metrics):
    categories = ['Condition', 'Drug', 'Observation']
    metrics_to_plot = ['precision', 'recall', 'f1']
    metric_labels = {'precision': 'P', 'recall': 'R', 'f1': 'F1'}
    sota_metrics = {
        'SciBERT': {
            'Condition': {'precision': 78.4, 'recall': 83.3, 'f1': 80.8},
            'Drug': {'precision': 73.4, 'recall': 80.9, 'f1': 77.0},
            'Observation': {'precision': 72.1, 'recall': 77.6, 'f1': 74.7},
            'average': {'precision': 74.63, 'recall': 80.60, 'f1': 77.50}
        }
    }
    fig, ax = plt.subplots(figsize=(16, 10))

    x = np.arange(len(categories))
    bar_width = 0.4
    opacity = 0.8
    gap = 0.1

    bars1 = []
    bars2 = []

    label_height = 40  # Konstante Höhe für die Labels

    for i, metric in enumerate(metrics_to_plot):
        model_values = [metrics[category][metric] * 100 for category in categories]
        sota_values = [sota_metrics['SciBERT'][category][metric] for category in categories]

        bars1.append(ax.bar(x - bar_width/2 - gap/2 + i*bar_width/3, model_values, bar_width/3, alpha=opacity, label=f'{model_name} - {metric_labels[metric]}'))
        bars2.append(ax.bar(x + bar_width/2 + gap/2 + i*bar_width/3, sota_values, bar_width/3, alpha=opacity, label=f'SciBERT - {metric_labels[metric]}'))

        for j, (model_value, sota_value) in enumerate(zip(model_values, sota_values)):
            ax.text(j - bar_width/2 - gap/2 + i*bar_width/3, label_height, f'{metric_labels[metric]}', ha='center', va='center', fontsize=13, color='white', fontweight='bold')
            ax.text(j + bar_width/2 + gap/2 + i*bar_width/3, label_height, f'{metric_labels[metric]}', ha='center', va='center', fontsize=13, color='white', fontweight='bold')

            ax.text(j - bar_width/2 - gap/2 + i*bar_width/3, model_value + 2, f'{model_value:.1f}%', ha='center', fontsize=12)
            ax.text(j + bar_width/2 + gap/2 + i*bar_width/3, sota_value + 2, f'{sota_value:.1f}%', ha='center', fontsize=12)

    ax.set_xticks(x)
    ax.set_xticklabels(categories, fontsize=16)
    ax.set_xlabel('Kategorie', fontsize=16, labelpad=25)
    ax.set_ylabel('Score (%)', fontsize=16, labelpad=25)
    ax.set_ylim(0, 105)
    ax.set_yticks(np.arange(0, 101, 10))
    ax.tick_params(axis='y', labelsize=14, width=2)
    ax.yaxis.set_tick_params(labelsize=14)
    ax.set_title(f'Evaluation: {model_name} vs. SciBERT', fontsize=20, pad=20)

    # Create separate legends
    legend1 = ax.legend(handles=bars1, loc='upper center', ncol=1, title=f"{model_name}")
    legend2 = ax.legend(handles=bars2, loc='upper right', bbox_to_anchor=(0.7, 1), ncol=1, title="SciBERT")
    ax.add_artist(legend1)  # Add the first legend back after the second legend is added

    ax.grid(True)
    plt.tight_layout()
    plt.savefig(f'pics/evaluation_{model_name}.png')
    plt.show()

def plot_avg_metrics(all_metrics):
    sota_metrics = {
        'SciBERT (SOTA)': {
            'average': {'precision': 71.16, 'recall': 81.39, 'f1': 75.89}
        },
        'R-BERT + SciBERT': {
            'average': {'precision': 72.23, 'recall': 78.23, 'f1': 75.0}
        }
    }
    metrics_to_plot = ['precision', 'recall', 'f1']
    model_names = ['SciBERT (SOTA)'] + list(all_metrics.keys())
    model_names = [name.replace('-Instruct', '') for name in model_names]  # Entferne "-Instruct" aus den Modellnamen
    model_names = [name.replace('_', '-') for name in model_names]  # Ersetze "_" durch "-"
    model_names = [name.replace('Gradient', 'Grad') for name in model_names]  # Ersetze "Gradient" durch "Grad"

    avg_precisions = [sota_metrics['SciBERT (SOTA)']['average']['precision']]
    avg_recalls = [sota_metrics['SciBERT (SOTA)']['average']['recall']]
    avg_f1_scores = [sota_metrics['SciBERT (SOTA)']['average']['f1']]

    for model, metrics in all_metrics.items():
        avg_precisions.append(metrics['average']['precision'])
        avg_recalls.append(metrics['average']['recall'])
        avg_f1_scores.append(metrics['average']['f1'])

    x = np.arange(len(model_names) * 4)
    bar_width = 1.5  # Breitere Balken
    opacity = 0.8
    gap = 0.55 # Abstand zwischen den Balken
    model_gap = 1.0  # Abstand zwischen den Modellen

    plt.figure(figsize=(14, 10))  # Größere Figur
    colors = ['#1f77b4', '#ff7f0e', '#2ca02c']  # Bessere Farben
    for i in range(len(model_names)):
        plt.bar(x[i * 4], avg_precisions[i], bar_width - gap, alpha=opacity, label='Precision' if i == 0 else '', color=colors[0])
        plt.bar(x[i * 4 + 1], avg_recalls[i], bar_width - gap, alpha=opacity, label='Recall' if i == 0 else '', color=colors[1])
        plt.bar(x[i * 4 + 2], avg_f1_scores[i], bar_width - gap, alpha=opacity, label='F1 Score' if i == 0 else '', color=colors[2])

    plt.xlabel('Models', fontsize=14)
    plt.ylabel('Score (%)', fontsize=14)
    plt.title('Ergebnisse der Auswertung über alle Operatoren', fontsize=18, pad=20)
    plt.xticks(x[1::4], model_names, rotation=45, ha='right', fontsize=14)
    plt.ylim(0, 100)
    plt.yticks(fontsize=14)  # Größere Zahlen an der y-Achse
    plt.legend(fontsize=14)
    plt.grid(True)

    y_offset = 2  # Abstand zwischen Balken und Prozentzahlen
    for i in range(len(model_names)):
        plt.text(x[i * 4], avg_precisions[i] + y_offset, f'{avg_precisions[i]:.1f}%', ha='center', fontsize=12)
        plt.text(x[i * 4 + 1], avg_recalls[i] + y_offset, f'{avg_recalls[i]:.1f}%', ha='center', fontsize=12)
        plt.text(x[i * 4 + 2], avg_f1_scores[i] + y_offset, f'{avg_f1_scores[i]:.1f}%', ha='center', fontsize=12)

    plt.tight_layout()
    plt.savefig('pics/average_metrics.png')
    plt.show()