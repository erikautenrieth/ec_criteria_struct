import os

def count_files(model_name, batch_name):
    model_folder = f"{batch_name}/model_output/{model_name}/output"
    ready_folder = f"{batch_name}/model_output/{model_name}/ready"
    failure_folder = f"{batch_name}/model_output/{model_name}/failure"
    struct_failure_folder = f"{batch_name}/model_output/{model_name}/structure_failure"
    def count_files_in_folder(folder):
        if os.path.exists(folder):
            return len([f for f in os.listdir(folder) if os.path.isfile(os.path.join(folder, f))])
        return 0
    model_folder_count = count_files_in_folder(model_folder)
    ready_folder_count = count_files_in_folder(ready_folder)
    failure_folder_count = count_files_in_folder(failure_folder)
    struct_failure_folder_count = count_files_in_folder(struct_failure_folder)
    return model_folder_count, ready_folder_count, failure_folder_count, struct_failure_folder_count

def latex_file_counts_table(model_name, batch_path):
    model_folder_count, ready_folder_count, failure_folder_count, struct_failure_folder_count = count_files(model_name, batch_path)
    total_files = model_folder_count
    latex_table = f"""
\\begin{{table}}[!ht]
\\centering
\\begin{{tabular}}{{lrr}}
\\toprule
\\textbf{{Kategorie}} & \\textbf{{Anzahl}} & \\textbf{{Prozent}} \\\\
\\midrule
Ausgabe & {model_folder_count} & 100.0\\% \\\\
Korrekt & {ready_folder_count} & {(ready_folder_count / total_files * 100):.1f}\\% \\\\
Parse Fehler & {failure_folder_count} & {(failure_folder_count / total_files * 100):.1f}\\% \\\\
Struktur Fehler & {struct_failure_folder_count} & {(struct_failure_folder_count / total_files * 100):.1f}\\% \\\\
\\bottomrule
\\end{{tabular}}
\\caption{{Ausgabe {model_name}}}
\\label{{tab:file_counts}}
\\end{{table}}
    """
    directory = "data/latex/files"
    os.makedirs(directory, exist_ok=True)
    file_path = os.path.join(directory, f"{model_name}_file_counts.tex")
    with open(file_path, "w") as file:
        file.write(latex_table)
    return latex_table



def latex_all_entitys_table(model_name, metrics):

    categories =  ['Contraindication', 'Eq-Value', 'Severity', 'Drug', 'Observation-Name', 'Age', 'Location', 'Organism-Name',
                   'Encounter', 'Drug-Name', 'Ethnicity', 'Modifier', 'Condition', 'Eq-Unit', 'Eq-Temporal-Unit', 'Family-Member',
                   'Organism', 'Other', 'Immunization-Name', 'Polarity', 'Condition-Type', 'Immunization', 'Eq-Operator',
                   'Eq-Temporal-Recency', 'Procedure-Name', 'Indication', 'Exception', 'Study', 'Language', 'Coreference',
                   'Provider', 'Acuteness', 'Life-Stage-And-Gender', 'Procedure', 'Risk', 'Death', 'Assertion', 'Allergy-Name',
                   'Specimen', 'Negation', 'Code', 'Stability', 'Birth', 'Criteria-Count', 'Eq-Comparison', 'Condition-Name',
                   'Insurance', 'Observation', 'Allergy', 'Eq-Temporal-Period']


    categories_sorted = sorted(categories, key=lambda x: metrics[x]['f1'], reverse=True)
    latex_table = "\\begin{table}[htbp]\n"
    latex_table += "\\centering\n"
    latex_table += "\\begin{tabular}{p{5cm}ccc}\n"  # Mehr Platz für die erste Spalte
    latex_table += "\\toprule\n"
    latex_table += "\\textbf{Kategorie} & \\textbf{Precision} & \\textbf{Recall} & \\textbf{F1-Score} \\\\\n"
    latex_table += "\\midrule\n"
    for category in categories_sorted:
        precision = metrics[category]['precision']
        recall = metrics[category]['recall']
        f1 = metrics[category]['f1']
        latex_table += f"{category} & {precision:.3f} & {recall:.3f} & {f1:.3f} \\\\\n"
    latex_table += "\\bottomrule\n"
    latex_table += "\\end{tabular}\n"
    latex_table += "\\caption{Metriken für " + model_name + "}\n"  # Caption am Ende
    latex_table += "\\label{tab:metrics_" + model_name.lower().replace(" ", "_") + "}\n"
    latex_table += "\\end{table}"
    os.makedirs('data/latex/all_ent/', exist_ok=True)
    file_path = f'data/latex/all_ent/{model_name}_all_enitys.tex'
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(latex_table)
    return latex_table


def latex_total_entitys(model_name, metrics):
    def format_metrics(p, r, f1):
        return f"{p*100:.1f}/{r*100:.1f}/{f1*100:.1f}"

    latex_table = r"""
\begin{table}[htbp]
\centering
\begin{tabular}{llcc}
\toprule
\textbf{Category} & \textbf{Entity} & \textbf{SciBERT} & \textbf{""" + model_name + r"""} \\
\midrule
\multirow{6}{*}{Clinical} & Condition & 78.4/83.3/80.8 & """ + format_metrics(metrics['Condition']['precision'], metrics['Condition']['recall'], metrics['Condition']['f1']) + r""" \\
 & Contraindication & 100.0/96.6/98.3 & """ + format_metrics(metrics['Contraindication']['precision'], metrics['Contraindication']['recall'], metrics['Contraindication']['f1']) + r""" \\
 & Drug & 73.4/80.9/77.0 & """ + format_metrics(metrics['Drug']['precision'], metrics['Drug']['recall'], metrics['Drug']['f1']) + r""" \\
 & Encounter & 58.3/74.4/65.4 & """ + format_metrics(metrics['Encounter']['precision'], metrics['Encounter']['recall'], metrics['Encounter']['f1']) + r""" \\
 & Observation & 72.1/77.6/74.7 & """ + format_metrics(metrics['Observation']['precision'], metrics['Observation']['recall'], metrics['Observation']['f1']) + r""" \\
 & Procedure & 71.3/79.4/75.1 & """ + format_metrics(metrics['Procedure']['precision'], metrics['Procedure']['recall'], metrics['Procedure']['f1']) + r""" \\
\midrule
\multirow{5}{*}{Demographic} & Age & 99.1/98.3/98.7 & """ + format_metrics(metrics['Age']['precision'], metrics['Age']['recall'], metrics['Age']['f1']) + r""" \\
 & Birth & 100.0/62.5/76.9 & """ + format_metrics(metrics['Birth']['precision'], metrics['Birth']['recall'], metrics['Birth']['f1']) + r""" \\
 & Death & 100.0/20.0/33.3 & """ + format_metrics(metrics['Death']['precision'], metrics['Death']['recall'], metrics['Death']['f1']) + r""" \\
 & Family-Member & 44.9/61.1/51.7 & """ + format_metrics(metrics['Family-Member']['precision'], metrics['Family-Member']['recall'], metrics['Family-Member']['f1']) + r""" \\
 & Language & 96.6/93.5/95.0 & """ + format_metrics(metrics['Language']['precision'], metrics['Language']['recall'], metrics['Language']['f1']) + r""" \\
\midrule
Logical & Negation & 73.5/82.9/77.9 & """ + format_metrics(metrics['Negation']['precision'], metrics['Negation']['recall'], metrics['Negation']['f1']) + r""" \\
\midrule
\multirow{6}{*}{Qualifier} & Assertion & 62.1/65.8/63.9 & """ + format_metrics(metrics['Assertion']['precision'], metrics['Assertion']['recall'], metrics['Assertion']['f1']) + r""" \\
 & Modifier & 58.5/65.4/61.8 & """ + format_metrics(metrics['Modifier']['precision'], metrics['Modifier']['recall'], metrics['Modifier']['f1']) + r""" \\
 & Polarity & 81.4/79.5/80.4 & """ + format_metrics(metrics['Polarity']['precision'], metrics['Polarity']['recall'], metrics['Polarity']['f1']) + r""" \\
 & Risk & 95.4/91.3/93.3 & """ + format_metrics(metrics['Risk']['precision'], metrics['Risk']['recall'], metrics['Risk']['f1']) + r""" \\
 & Severity & 86.5/94.1/90.2 & """ + format_metrics(metrics['Severity']['precision'], metrics['Severity']['recall'], metrics['Severity']['f1']) + r""" \\
 & Stability & 75.3/84.7/79.7 & """ + format_metrics(metrics['Stability']['precision'], metrics['Stability']['recall'], metrics['Stability']['f1']) + r""" \\
\midrule
\multirow{6}{*}{Temporal and Comparative} & Eq-Comparison & 85.3/89.3/87.3 & """ + format_metrics(metrics['Eq-Comparison']['precision'], metrics['Eq-Comparison']['recall'], metrics['Eq-Comparison']['f1']) + r""" \\
 & Criteria-Count & 12.5/20.0/15.5 & """ + format_metrics(metrics['Criteria-Count']['precision'], metrics['Criteria-Count']['recall'], metrics['Criteria-Count']['f1']) + r""" \\
 & Eq-Temporal-Period & 82.6/86.3/84.4 & """ + format_metrics(metrics['Eq-Temporal-Period']['precision'], metrics['Eq-Temporal-Period']['recall'], metrics['Eq-Temporal-Period']['f1']) + r""" \\
 & Eq-Temporal-Recency & 50.0/66.6/57.1 & """ + format_metrics(metrics['Eq-Temporal-Recency']['precision'], metrics['Eq-Temporal-Recency']['recall'], metrics['Eq-Temporal-Recency']['f1']) + r""" \\
 & Eq-Temporal-Unit & 98.2/99.4/98.8 & """ + format_metrics(metrics['Eq-Temporal-Unit']['precision'], metrics['Eq-Temporal-Unit']['recall'], metrics['Eq-Temporal-Unit']['f1']) + r""" \\
 & Eq-Value & 96.4/97.1/96.7 & """ + format_metrics(metrics['Eq-Value']['precision'], metrics['Eq-Value']['recall'], metrics['Eq-Value']['f1']) + r""" \\
\midrule
Other & Location & 73.4/78.3/75.8 & """ + format_metrics(metrics['Location']['precision'], metrics['Location']['recall'], metrics['Location']['f1']) + r""" \\
\midrule
-- & Total & 79.0/83.7/81.3 & """ + format_metrics(metrics['total']['precision'], metrics['total']['recall'], metrics['total']['f1']) + r""" \\
\bottomrule
\end{tabular}
\caption{Leistungsvergleich der Metriken auf dem LCT Korpus: SciBERT vs """ + model_name + r""" (\%, Precision/Recall/F1). Die Gesamtauswertung umfasst 50 Entitätskategorien.}
\label{tab:metrics_comparison}
\end{table}
    """
    os.makedirs('data/latex/total/', exist_ok=True)
    file_path =  f'data/latex/total/{model_name}_total_entitys.tex'
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(latex_table)
    return latex_table


def latex_operator_metrics_table(all_metrics):
    operators = ['AND', 'AND1', 'OR', 'NOT']
    metrics_to_plot = ['precision', 'recall', 'f1']
    sota_metrics = {
        'SciBERT': {
            'AND': {'precision': 54.1, 'recall': 60.0, 'f1': 56.9},
            'AND1': {'precision': 0.0, 'recall': 0.0, 'f1': 0.0},
            'NOT': {'precision': 74.3, 'recall': 91.0, 'f1': 81.8},
            'OR': {'precision': 85.1, 'recall': 93.2, 'f1': 89.0}
        }
    }
    latex_table = r"\begin{table}[!ht]" + "\n"
    latex_table += r"\centering" + "\n"
    latex_table += r"\small" + "\n"
    latex_table += r"\begin{tabular}{llrrrrr}" + "\n"  # Eine weitere Spalte für den Durchschnittswert
    latex_table += r"\toprule" + "\n"
    latex_table += r"\textbf{Model} & \textbf{Metrik} & \multicolumn{4}{c}{\textbf{Operator}} & \textbf{Durchschnitt} \\" + "\n"
    latex_table += r"\cmidrule(lr){3-6}" + "\n"
    latex_table += r"& & AND & AND1 & OR & NOT & \\" + "\n"
    latex_table += r"\midrule" + "\n"
    model_names = ['SOTA'] + list(all_metrics.keys())
    for model in model_names:
        model_display = 'SOTA\n(SciBERT)' if model == 'SOTA' else 'Llama3 70B\n(Fine-Tuned)'
        for i, metric in enumerate(metrics_to_plot):
            metric_display = 'Precision' if metric == 'precision' else 'Recall' if metric == 'recall' else 'F1-Score'
            latex_table += f"{model_display if i == 0 else ''} & {metric_display}"
            values = []
            for op in operators:
                if model == 'SOTA':
                    value = sota_metrics['SciBERT'][op][metric]
                else:
                    value = all_metrics[model][op][metric]
                latex_table += f" & {value:.1f}"
                if op != 'AND1':  # AND1 nicht in die Durchschnittsberechnung einbeziehen
                    values.append(value)
            average_value = sum(values) / len(values)  # Durchschnitt berechnen ohne AND1
            latex_table += f" & {average_value:.1f}"  # Durchschnittswert hinzufügen
            latex_table += r" \\" + "\n"
        if model != model_names[-1]:
            latex_table += r"\midrule" + "\n"
    latex_table += r"\bottomrule" + "\n"
    latex_table += r"\end{tabular}" + "\n"
    latex_table += r"\caption{Vergleich der Operatormetriken für SOTA (SciBERT) und Llama3 70B (Fine-Tuned)}" + "\n"
    latex_table += r"\label{tab:operator_metrics}" + "\n"
    latex_table += r"\end{table}"
    os.makedirs('data/latex/operator/', exist_ok=True)
    file_path =  f'data/latex/operator/operators.tex'
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(latex_table)
    return latex_table