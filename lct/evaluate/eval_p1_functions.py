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