import os

sota_metrics = {
    'SciBERT': {
        'AND': {'precision': 54.1, 'recall': 60.0, 'f1': 56.9},
        'NOT': {'precision': 74.3, 'recall': 91.0, 'f1': 81.8},
        'OR': {'precision': 85.1, 'recall': 93.2, 'f1': 89.0}
    },
    'R-BERT + SciBERT': {
        'AND': {'precision': 53.8, 'recall': 53.8, 'f1': 53.8},
        'NOT': {'precision': 74.5, 'recall': 88.7, 'f1': 81.0},
        'OR': {'precision': 88.4, 'recall': 92.2, 'f1': 90.2}
    }
}

def calculate_average_metrics(metrics):
    avg_metrics = {'precision': 0, 'recall': 0, 'f1': 0}
    operators = ['AND', 'NOT', 'OR']
    for metric in avg_metrics.keys():
        avg_metrics[metric] = sum(metrics[op][metric] for op in operators) / len(operators)
    return avg_metrics


def avg_operators_latex(all_metrics, versuch_name):
    metrics_to_plot = ['precision', 'recall', 'f1']

    # SOTA metrics
    sota_metrics = {
        'SciBERT (SOTA)': {
            'average': {'precision': 71.16, 'recall': 81.39, 'f1': 75.89}
        },
        'R-BERT + SciBERT': {
            'average': {'precision': 72.23, 'recall': 78.23, 'f1': 75.0}
        }
    }
    max_values = {metric: float('-inf') for metric in metrics_to_plot}
    for model_metrics in [*sota_metrics.values(), *all_metrics.values()]:
        for metric in metrics_to_plot:
            value = model_metrics['average'][metric]
            if value > max_values[metric]:
                max_values[metric] = value

    latex_table = "\\begin{table}[h]\n"
    latex_table += "\\centering\n"
    latex_table += "\\begin{tabular}{lccc}\n"
    latex_table += "\\toprule\n"
    latex_table += "Model & Precision & Recall & F1 \\\\\n"
    latex_table += "\\midrule\n"

    # Add rows for SOTA models
    for name, values in sota_metrics.items():
        row = name.replace("_", "-")
        for metric in metrics_to_plot:
            value = values['average'][metric]
            formatted_value = "{:.1f}".format(value)
            if value == max_values[metric]:
                formatted_value = f"\\textbf{{{formatted_value}}}"
            row += f" & {formatted_value}"
        row += " \\\\\n"
        latex_table += row

    # Add rows for other models
    for model, model_metrics in all_metrics.items():
        row = model.replace("_", "-")
        for metric in metrics_to_plot:
            value = model_metrics['average'][metric]
            formatted_value = "{:.1f}".format(value)
            if value == max_values[metric]:
                formatted_value = f"\\textbf{{{formatted_value}}}"
            row += f" & {formatted_value}"
        row += " \\\\\n"
        latex_table += row

    latex_table += "\\bottomrule\n"
    latex_table += "\\end{tabular}\n"
    latex_table += f"\\caption{{Average Model Performance Metrics for {versuch_name}}}\n"
    latex_table += "\\label{tab:avg_model_metrics}\n"
    latex_table += "\\end{table}\n"

    os.makedirs("latex", exist_ok=True)
    with open(f"data/latex/{versuch_name}.tex", "w") as file:
        file.write(latex_table)
    return latex_table


def and_or_not_to_latex(all_metrics, versuch_name):
    operators = ['AND', 'OR', 'NOT']
    metrics_to_plot = ['precision', 'recall', 'f1']


    max_values = {op: {metric: float('-inf') for metric in metrics_to_plot} for op in operators}

    # Find the maximum values per column, including SciBERT and R-BERT + SciBERT
    scibert_values = {
        'AND': {'precision': 54.1, 'recall': 60.0, 'f1': 56.9},
        'OR': {'precision': 85.1, 'recall': 93.2, 'f1': 89.0},
        'NOT': {'precision': 74.3, 'recall': 91.0, 'f1': 81.8}
    }
    rbert_scibert_values = {
        'AND': {'precision': 53.8, 'recall': 53.8, 'f1': 53.8},
        'OR': {'precision': 88.4, 'recall': 92.2, 'f1': 90.2},
        'NOT': {'precision': 74.5, 'recall': 88.7, 'f1': 81.0}
    }

    # Update max_values with SciBERT and R-BERT + SciBERT values
    for op in operators:
        for metric in metrics_to_plot:
            max_values[op][metric] = max(
                scibert_values[op][metric],
                rbert_scibert_values[op][metric],
                max_values[op][metric]
            )

    # Update max_values with all other models
    for model_metrics in all_metrics.values():
        for op in operators:
            for metric in metrics_to_plot:
                value = model_metrics[op][metric]
                if value > max_values[op][metric]:
                    max_values[op][metric] = value

    latex_table = "\\begin{table}[ht]\n"
    latex_table += "\\centering\n"
    latex_table += "\\begin{tabular}{l" + "c" * (len(metrics_to_plot) * len(operators)) + "}\n"
    latex_table += "\\toprule\n"
    latex_table += "Model & " + " & ".join([f"\\multicolumn{{{len(metrics_to_plot)}}}{{c}}{{{op}}}" for op in operators]) + " \\\\\n"
    for i, op in enumerate(operators):
        start = i * len(metrics_to_plot) + 2
        end = (i + 1) * len(metrics_to_plot) + 1
        latex_table += f"\\cmidrule(lr){{{start}-{end}}} "
    latex_table += "\n"
    latex_table += " & " + " & ".join([" & ".join(metric[:1].upper() for metric in metrics_to_plot) for _ in operators]) + " \\\\\n"
    latex_table += "\\midrule\n"

    # Add rows for SciBERT and R-BERT + SciBERT with bold for maximum values
    for name, values in [("SciBERT (SOTA)", scibert_values), ("R-BERT + SciBERT", rbert_scibert_values)]:
        row = name
        for op in operators:
            for metric in metrics_to_plot:
                value = values[op][metric]
                formatted_value = "{:.1f}".format(value)
                if value == max_values[op][metric]:
                    formatted_value = f"\\textbf{{{formatted_value}}}"
                row += f" & {formatted_value}"
        row += " \\\\\n"
        latex_table += row

    # Add rows for other models and make the largest values bold
    for model, model_metrics in all_metrics.items():
        row = model.replace("_", "-")  # Replace underscores with hyphens in the model name
        for op in operators:
            for metric in metrics_to_plot:
                value = model_metrics[op][metric]
                formatted_value = "{:.1f}".format(value)
                if value == max_values[op][metric]:
                    formatted_value = f"\\textbf{{{formatted_value}}}"
                row += f" & {formatted_value}"
        row += " \\\\\n"
        latex_table += row

    latex_table += "\\bottomrule\n"
    latex_table += "\\end{tabular}\n"
    latex_table += "\\caption{Model Performance Metrics}\n"
    latex_table += "\\label{tab:model_metrics}\n"
    latex_table += "\\end{table}\n"

    os.makedirs("latex", exist_ok=True)
    with open(f"data/latex/{versuch_name}_ops_einzeln.tex", "w") as file:
        file.write(latex_table)
    return latex_table

