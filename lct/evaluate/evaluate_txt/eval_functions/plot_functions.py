import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns


## Evaluation

def plot_count_comparison(all_metrics):
    operators = ['AND', 'OR', 'NOT']
    count_metrics = ['total_label', 'total_model']
    fig, ax = plt.subplots(figsize=(16, 8))
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


def plot_metrics(all_metrics):
    operators = ['AND', 'OR', 'NOT']
    metrics_to_plot = ['precision', 'recall', 'f1']
    sota_metrics = {
        'AND': {'precision': 54.1, 'recall': 60.0, 'f1': 56.9},
        'OR': {'precision': 85.1, 'recall': 93.2, 'f1': 89.0},
        'NOT': {'precision': 74.3, 'recall': 91.0, 'f1': 81.8}
    }

    fig, axs = plt.subplots(len(operators), 1, figsize=(15, 24), gridspec_kw={'hspace': 1.2})
    for i, op in enumerate(operators):
        ax = axs[i]
        model_names = ['SOTA'] + list(all_metrics.keys())
        metric_values = {metric: [sota_metrics[op][metric]] for metric in metrics_to_plot}
        for model, model_metrics in all_metrics.items():
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

def plot_avg_pct(all_metrics):
    model_names = []
    avg_missing_pcts = []
    avg_zuviel_pcts = []
    for model, metrics in all_metrics.items():
        model_names.append(model.replace('-Instruct', ''))  # Entferne "-Instruct" aus den Modellnamen
        avg_missing_pcts.append(metrics['average_missing_percentage'])
        avg_zuviel_pcts.append(metrics['average_zuviel_percentage'])
    x = range(len(model_names))
    plt.figure(figsize=(14, 8))
    bar_width = 0.4
    plt.bar(x, avg_missing_pcts, color='skyblue', width=bar_width, label='Mittlere Anzahl fehlender Wörter')
    plt.bar([p + bar_width for p in x], avg_zuviel_pcts, color='lightcoral', width=bar_width, label='Mittlere Anzahl zugefügter Wörter')
    plt.xlabel('Modelle', fontsize=14)
    plt.ylabel('Prozentsatz (%)', fontsize=14)
    plt.title(f'Durchschnittlicher Prozentsatz fehlender und zugefügter Wörter ', fontsize=18, pad=20)
    plt.xticks([p + bar_width / 2 for p in x], model_names, rotation=45, ha='right', fontsize=14)
    plt.yticks(fontsize=14)
    plt.ylim(0, max(max(avg_missing_pcts), max(avg_zuviel_pcts)) + 5)
    plt.grid(axis='y', linestyle='--', alpha=0.7)
    plt.legend()
    for i, (v1, v2) in enumerate(zip(avg_missing_pcts, avg_zuviel_pcts)):
        plt.text(i, v1 + 0.5, f'{v1:.1f}%', ha='center', fontsize=12)
        plt.text(i + bar_width, v2 + 0.5, f'{v2:.1f}%', ha='center', fontsize=12)
    plt.tight_layout()
    plt.savefig(f'data/pics/missing_pct.png')
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
    model_names = [name.replace('-Instruct', '') for name in model_names]
    model_names = [name.replace('_', '-') for name in model_names]
    model_names = [name.replace('Llama-3', 'Llama3') for name in model_names]
    avg_precisions = [sota_metrics['SciBERT (SOTA)']['average']['precision']]
    avg_recalls = [sota_metrics['SciBERT (SOTA)']['average']['recall']]
    avg_f1_scores = [sota_metrics['SciBERT (SOTA)']['average']['f1']]
    for model, metrics in all_metrics.items():
        avg_precisions.append(metrics['average']['precision'])
        avg_recalls.append(metrics['average']['recall'])
        avg_f1_scores.append(metrics['average']['f1'])
    x = np.arange(len(model_names) * 4)
    bar_width = 1.8  # Breitere Balken
    opacity = 0.8
    gap = 0.97 # Abstand zwischen den Balken
    model_gap = 1.0  # Abstand zwischen den Modellen
    plt.figure(figsize=(18, 12))  # Größere Figur
    sns.set(style='darkgrid', font_scale=1.2)
    sns.set_palette('deep')
    colors = ['#1f77b4', '#ff7f0e', '#2ca02c']  # Bessere Farben
    for i in range(len(model_names)):
        plt.bar(x[i * 4], avg_precisions[i], bar_width - gap, alpha=opacity, label='Precision' if i == 0 else '', color=colors[0])
        plt.bar(x[i * 4 + 1], avg_recalls[i], bar_width - gap, alpha=opacity, label='Recall' if i == 0 else '', color=colors[1])
        plt.bar(x[i * 4 + 2], avg_f1_scores[i], bar_width - gap, alpha=opacity, label='F1 Score' if i == 0 else '', color=colors[2])
    plt.xlabel('Modelle', fontsize=16)
    plt.ylabel('Score (%)', fontsize=16)
    plt.title(f' Durchschnittliche Leistung für AND, OR, NOT Operatoren ', fontsize=18, pad=25)
    max_f1 = max(avg_f1_scores[1:])
    max_f1 = round(max_f1,1)# SciBERT (SOTA) ausgeschlossen
    max_f1_indices = [i + 1 for i, f1 in enumerate(avg_f1_scores[1:]) if round(f1,1) == max_f1]
    tick_labels = [
        f'${{\\bf {name} }}$' if i in max_f1_indices else name
        for i, name in enumerate(model_names)
    ]
    plt.xticks(x[1::4], tick_labels, rotation=40, ha='right', fontsize=16)
    plt.ylim(0, 100)
    plt.yticks(fontsize=14)  # Größere Zahlen an der y-Achse
    plt.legend(title='Metriken', fontsize=12)
    plt.grid(True, linestyle='--', linewidth=0.5, color='gray', alpha=0.7)
    y_offset = 2  # Abstand zwischen Balken und Prozentzahlen
    for i in range(len(model_names)):
        plt.text(x[i * 4], avg_precisions[i] + y_offset, f'{avg_precisions[i]:.1f}%', ha='center', fontsize=10)
        plt.text(x[i * 4 + 1], avg_recalls[i] + y_offset, f'{avg_recalls[i]:.1f}%', ha='center', fontsize=10)
        plt.text(x[i * 4 + 2], avg_f1_scores[i] + y_offset, f'{avg_f1_scores[i]:.1f}%', ha='center', fontsize=10)
    plt.tight_layout()
    plt.savefig(f'data/pics/all_operators_.png')
    plt.show()

def plot_f1_scores_temperatur(all_metrics):
    temperatures = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]

    f1_scores_70b = []
    f1_scores_llama3_5shot = []
    f1_scores_llama3_0shot = []

    for temp in temperatures:
        f1_scores_70b.append(all_metrics[f'70b_EP10_r256_temp{temp:.1f}']['average']['f1'])
        f1_scores_llama3_5shot.append(all_metrics[f'Llama-3-70B_5_shot_max_{temp:.1f}']['average']['f1'])
        f1_scores_llama3_0shot.append(all_metrics[f'Llama-3-70B-Instruct_0_shot_{temp:.1f}']['average']['f1'])

    x = np.arange(len(temperatures))
    bar_width = 0.25

    plt.figure(figsize=(16, 8))
    sns.set_style("whitegrid")
    plt.bar(x - bar_width, f1_scores_70b, bar_width, alpha=0.8, color='#A9D0F5', label='Fine-Tuned')
    plt.bar(x, f1_scores_llama3_5shot, bar_width, alpha=0.8, color='#FFA07A', label='5-Shot')
    plt.bar(x + bar_width, f1_scores_llama3_0shot, bar_width, alpha=0.8, color='#90EE90', label='0-Shot')
    plt.plot(x - bar_width, f1_scores_70b, color='blue', linestyle='-', linewidth=2)
    plt.plot(x, f1_scores_llama3_5shot, color='red', linestyle='-', linewidth=2)
    plt.plot(x + bar_width, f1_scores_llama3_0shot, color='green', linestyle='-', linewidth=2)
    plt.scatter(x - bar_width, f1_scores_70b, color='blue', s=50, zorder=3)
    plt.scatter(x, f1_scores_llama3_5shot, color='red', s=50, zorder=3)
    plt.scatter(x + bar_width, f1_scores_llama3_0shot, color='green', s=50, zorder=3)
    plt.xlabel('Temperatur', fontsize=14, fontweight='bold', labelpad=15)
    plt.ylabel('F1-Score', fontsize=14, fontweight='bold', labelpad=15)
    plt.title('Llama3 70B Temperatur Evaluation', fontsize=16, fontweight='bold', pad=20)
    plt.xticks(x, temperatures, fontsize=12)
    plt.yticks(fontsize=12)
    plt.ylim(0, 100)
    plt.legend(fontsize=12, loc='upper right')
    for i, v in enumerate(f1_scores_70b):
        plt.text(i - bar_width, v + 2, f'{v:.1f}%', ha='center', va='bottom', fontsize=9)
    for i, v in enumerate(f1_scores_llama3_5shot):
        plt.text(i, v + 2, f'{v:.1f}%', ha='center', va='bottom', fontsize=9)
    for i, v in enumerate(f1_scores_llama3_0shot):
        plt.text(i + bar_width, v + 2, f'{v:.1f}%', ha='center', va='bottom', fontsize=9)
    plt.tight_layout()
    plt.savefig(f'data/pics/Temperatur.png')
    plt.show()