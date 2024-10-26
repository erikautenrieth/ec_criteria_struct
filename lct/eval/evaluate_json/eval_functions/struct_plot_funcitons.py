import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sns

from lct.evaluate_json.eval_functions.struct_latex_functions import count_files


def plot_avg_pct(all_metrics, versuch_name):
    model_names = []
    avg_missing_pcts = []
    avg_zuviel_pcts = []
    for model, metrics in all_metrics.items():
        model_names.append(model.replace('-Instruct', ''))
        avg_missing_pcts.append(metrics['average_missing_percentage'])
        avg_zuviel_pcts.append(metrics['average_zuviel_percentage'])
        model_names = [name.replace('-Instruct', '') for name in model_names]
    x = range(len(model_names))
    plt.figure(figsize=(14, 8))
    bar_width = 0.4
    plt.bar(x, avg_missing_pcts, color='skyblue', width=bar_width, label='Mittlere Anzahl fehlender Wörter')
    plt.bar([p + bar_width for p in x], avg_zuviel_pcts, color='lightcoral', width=bar_width, label='Mittlere Anzahl zugefügter Wörter')
    plt.xlabel('Modelle', fontsize=14)
    plt.ylabel('Prozentsatz (%)', fontsize=14)
    plt.title(f'Durchschnittlicher Prozentsatz fehlender und zugefügter Wörter der {versuch_name}', fontsize=18, pad=20)
    plt.xticks([p + bar_width / 2 for p in x], model_names, rotation=45, ha='right', fontsize=14)
    plt.yticks(fontsize=14)
    plt.ylim(0, max(max(avg_missing_pcts), max(avg_zuviel_pcts)) + 5)
    plt.grid(axis='y', linestyle='--', alpha=0.7)
    plt.legend()

    for i, (v1, v2) in enumerate(zip(avg_missing_pcts, avg_zuviel_pcts)):
        plt.text(i, v1 + 0.5, f'{v1:.1f}%', ha='center', fontsize=12)
        plt.text(i + bar_width, v2 + 0.5, f'{v2:.1f}%', ha='center', fontsize=12)
    plt.tight_layout()
    #plt.savefig(f'data/pics/missing_pct_{versuch_name}.png')
    plt.show()
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
    legend1 = ax.legend(handles=bars1, loc='upper center', ncol=1, title=f"{model_name}")
    legend2 = ax.legend(handles=bars2, loc='upper right', bbox_to_anchor=(0.7, 1), ncol=1, title="SciBERT")
    ax.add_artist(legend1)  # Add the first legend back after the second legend is added
    ax.grid(True)
    plt.tight_layout()
    #plt.savefig(f'pics/evaluation_{model_name}.png')
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
    #plt.savefig('data/pics/average_metrics.png')
    plt.show()

def plot_heatmap(model_name, metrics, categories):
    # Erstelle eine DataFrame mit den Metriken
    data = {cat: [metrics[cat]['precision'], metrics[cat]['recall'], metrics[cat]['f1']] for cat in categories}
    df = pd.DataFrame(data, index=['Precision', 'Recall', 'F1']).T
    df_sorted = df.sort_values('F1', ascending=False)
    plt.figure(figsize=(15, len(categories) * 0.3))
    sns.heatmap(df_sorted, annot=True, cmap="YlGnBu", fmt=".2f", cbar_kws={'label': 'Score'})
    plt.title(f'Metriken für {model_name}')
    plt.tight_layout()
    #plt.savefig(f'data/pics/heatmap_{model_name}.png')
    plt.show()

def plot_operator_metrics(all_metrics):
    operators = ['AND', 'AND1', 'OR', 'NOT']
    metrics_to_plot = ['precision', 'recall', 'f1']
    colors = ['#1f77b4', '#ff7f0e', '#2ca02c']  # Farben für Precision, Recall, F1
    sota_metrics = {
        'SciBERT': {
            'AND': {'precision': 54.1, 'recall': 60.0, 'f1': 56.9},
            'AND1': {'precision': 0.0, 'recall': 0.0, 'f1': 0.0},
            'NOT': {'precision': 74.3, 'recall': 91.0, 'f1': 81.8},
            'OR': {'precision': 85.1, 'recall': 93.2, 'f1': 89.0}
        }
    }

    for i, op in enumerate(operators):
        plt.figure(figsize=(12, 8))  # Größere Figur
        model_names = ['SOTA'] + [e.replace('_p4_ep10_p1', '') for e in list(all_metrics.keys())]
        metric_values = {metric: [] for metric in metrics_to_plot}
        for metric in metrics_to_plot:
            metric_values[metric].append(sota_metrics['SciBERT'][op][metric])
        for model, model_metrics in all_metrics.items():
            for metric in metrics_to_plot:
                metric_values[metric].append(model_metrics[op][metric])
        x = np.arange(len(model_names))
        bar_width = 0.25
        opacity = 0.8
        for j, metric in enumerate(metrics_to_plot):
            plt.bar(x + j * bar_width, metric_values[metric], bar_width,
                    alpha=opacity, label=metric.capitalize(), color=colors[j])
        plt.xlabel('Models', fontsize=14, labelpad=10)
        plt.ylabel('Score (%)', fontsize=14, labelpad=10)
        plt.title(f'Evaluation: {op}', fontsize=18, pad=20)  # Mehr Abstand nach dem Titel
        plt.xticks(x + bar_width, model_names, rotation=45, ha='right', fontsize=12)
        plt.ylim(0, 110)  # Erhöhung des y-Limits für mehr Platz oben
        plt.legend(fontsize=12, loc='upper center', ncol=3)  # Legende unter dem Plot
        plt.grid(axis='y', linestyle='--', alpha=0.7)
        for j, metric in enumerate(metrics_to_plot):
            for k, v in enumerate(metric_values[metric]):
                plt.text(k + j * bar_width, v + 2, f'{v:.1f}%',
                         ha='center', va='bottom', fontsize=10)
        plt.tight_layout()
        #plt.savefig(f'data/pics/operator_metrics_{op}.png', bbox_inches='tight')
        plt.show()

def plot_metrics_all_entitys(model_name, metrics, categories):
    metrics_to_plot = ['precision', 'recall', 'f1']
    metric_labels = {'precision': 'P', 'recall': 'R', 'f1': 'F1'}
    categories_sorted = sorted(categories, key=lambda x: metrics[x]['f1'], reverse=True)
    fig, ax = plt.subplots(figsize=(20, 12))  # Vergrößere die Figur
    x = np.arange(len(categories_sorted) + 1)  # +1 für die Gesamtbalken
    bar_width = 0.25
    opacity = 0.8
    for i, metric in enumerate(metrics_to_plot):
        values = [metrics[category][metric] * 100 for category in categories_sorted]
        total_value = metrics['total'][metric] * 100
        values.append(total_value)  # Füge die Gesamtwerte hinzu
        bars = ax.bar(x + i*bar_width, values, bar_width, alpha=opacity, label=f'{metric_labels[metric]}')
        for j, v in enumerate(values):
            ax.text(x[j] + i*bar_width, v + 1, f'{v:.1f}', ha='center', va='bottom', fontsize=8, rotation=90)
    ax.set_xlabel('Kategorie', fontsize=12, labelpad=10)
    ax.set_ylabel('Score (%)', fontsize=12, labelpad=10)
    ax.set_title(f'Evaluation: {model_name}', fontsize=16, pad=20)
    ax.set_xticks(x + bar_width)
    categories_sorted.append('Gesamt')  # Füge die Beschriftung für die Gesamtwerte hinzu
    ax.set_xticklabels(categories_sorted, rotation=90, ha='right', fontsize=8)
    ax.legend(loc='upper right', fontsize=10)
    ax.set_ylim(0, 105)
    plt.tight_layout()
    #plt.savefig(f'data/pics/evaluation_{model_name}_all_categories.png', bbox_inches='tight')
    plt.show()


def plot_file_counts(model_name, batch_name):
    model_folder_count, ready_folder_count, failure_folder_count, struct_failure_folder_count = count_files(model_name, batch_name)
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
    #plt.savefig(f'data/pics/file_counts_{model_name}.png', bbox_inches='tight')
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
    #plt.savefig(f'pics/entitys_{model_name}.png')
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