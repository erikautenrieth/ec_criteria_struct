import os
import pandas as pd
import numpy as np
import pandas as pd

def create_latex_table(all_metrics):
    temperatures = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
    data = {
        'Temperatur': temperatures,
        'Fine-Tuned': [],
        '5-Shot': [],
        '0-Shot': []
    }
    for temp in temperatures:
        data['Fine-Tuned'].append(all_metrics[f'70b_EP10_r256_temp{temp:.1f}']['average']['f1'])
        data['5-Shot'].append(all_metrics[f'Llama-3-70B_5_shot_max_{temp:.1f}']['average']['f1'])
        data['0-Shot'].append(all_metrics[f'Llama-3-70B-Instruct_0_shot_{temp:.1f}']['average']['f1'])
    df = pd.DataFrame(data)
    df = df.round(1)
    latex_table = df.to_latex(index=False, column_format='c|ccc', escape=False)
    latex_table = f"""
\\begin{{table}}[htbp]
\\centering
\\caption{{F1-Scores für verschiedene Temperaturen und Modellkonfigurationen}}
\\label{{tab:temperature-f1-scores}}
{latex_table}
\\end{{table}}
"""
    with open('data/latex/temperature_f1_scores_table.tex', 'w') as f:
        f.write(latex_table)
    print(latex_table)




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

    latex_table = "\\begin{table}[ht]\n"
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



def calculate_mean_excel(data, model_names, file_path='n_shot_mean_results.xlsx'):
    n_shot_models = [model for model in data.keys() ]
    precisions = []
    recalls = []
    f1_scores = []
    missing_percentages = []
    excess_percentages = []
    for model in n_shot_models:
        print(model)
        avg = data[model]['average']
        precisions.append(avg['precision'])
        recalls.append(avg['recall'])
        f1_scores.append(avg['f1'])
        missing_percentages.append(data[model]['average_missing_percentage'])
        excess_percentages.append(data[model]['average_zuviel_percentage'])
    avg_precision = np.mean(precisions)
    avg_recall = np.mean(recalls)
    avg_f1 = np.mean(f1_scores)
    avg_missing_percentage = np.mean(missing_percentages)
    avg_excess_percentage = np.mean(excess_percentages)
    print(avg_missing_percentage)
    std_precision = np.std(precisions)
    std_recall = np.std(recalls)
    std_f1 = np.std(f1_scores)
    std_missing_percentage = np.std(missing_percentages)
    std_excess_percentage = np.std(excess_percentages)

    result = {
        'average_precision': avg_precision,
        'average_recall': avg_recall,
        'average_f1': avg_f1,
        'std_precision': std_precision,
        'std_recall': std_recall,
        'std_f1': std_f1,
        'average_missing_percentage': avg_missing_percentage,
        'average_excess_percentage': avg_excess_percentage,
        'std_missing_percentage': std_missing_percentage,
        'std_excess_percentage': std_excess_percentage
    }

    df = pd.DataFrame(result, index=[model_names])
    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    if os.path.exists(file_path):
        existing_df = pd.read_excel(file_path, index_col=0)
        existing_df.update(df)
        df = pd.concat([existing_df, df[~df.index.isin(existing_df.index)]])

    df.to_excel(file_path)
    print(f"Results saved/updated in {file_path}")

    return result


def calculate_mean_excel(data, model_names, file_path='data/excel/llama70b_mean.xlsx'):
    n_shot_models = [model for model in data.keys()]
    operators = ['AND', 'OR', 'NOT']
    metrics = ['precision', 'recall', 'f1']
    all_metrics = {op: {metric: [] for metric in metrics} for op in operators}
    missing_percentages = []
    excess_percentages = []
    for model in n_shot_models:
        for op in operators:
            for metric in metrics:
                all_metrics[op][metric].append(data[model][op][metric])
        missing_percentages.append(data[model]['average_missing_percentage'])
        excess_percentages.append(data[model]['average_zuviel_percentage'])
    result = {}
    for op in operators:
        for metric in metrics:
            result[f'{op}_avg_{metric}'] = np.mean(all_metrics[op][metric])
            result[f'{op}_std_{metric}'] = np.std(all_metrics[op][metric])
    result['average_missing_percentage'] = np.mean(missing_percentages)
    result['average_excess_percentage'] = np.mean(excess_percentages)
    result['std_missing_percentage'] = np.std(missing_percentages)
    result['std_excess_percentage'] = np.std(excess_percentages)
    df = pd.DataFrame(result, index=[model_names])
    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    if os.path.exists(file_path):
        existing_df = pd.read_excel(file_path, index_col=0)
        existing_df.update(df)
        df = pd.concat([existing_df, df[~df.index.isin(existing_df.index)]])
        print(f"Existing file updated: {file_path}")
    else:
        print(f"New file created: {file_path}")
    df.to_excel(file_path)

    return result
def avg_operators_latex(all_metrics):
    metrics_to_plot = ['precision', 'recall', 'f1']
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

    latex_table = "\\begin{table}[ht]\n"
    latex_table += "\\centering\n"
    latex_table += "\\begin{tabular}{lcccc}\n"
    latex_table += "\\toprule\n"
    latex_table += "Model & Precision & Recall & F1 & Halluzination (%) \\\\\n"
    latex_table += "\\midrule\n"
    for name, values in sota_metrics.items():
        row = name.replace("_", "-")
        for metric in metrics_to_plot:
            value = values['average'][metric]
            formatted_value = "{:.1f}".format(value)
            if value == max_values[metric]:
                formatted_value = f"\\textbf{{{formatted_value}}}"
            row += f" & {formatted_value}"
        row += " & - \\\\\n"  # No zuviel percentage for SOTA models
        latex_table += row
    for model, model_metrics in all_metrics.items():
        row = model.replace("_", "-")
        for metric in metrics_to_plot:
            value = model_metrics['average'][metric]
            formatted_value = "{:.1f}".format(value)
            if value == max_values[metric]:
                formatted_value = f"\\textbf{{{formatted_value}}}"
            row += f" & {formatted_value}"
        # Add average zuviel percentage value
        zuvielpct_value = model_metrics['average_zuviel_percentage']
        formatted_zuvielpct_value = "{:.1f}".format(zuvielpct_value)
        row += f" & {formatted_zuvielpct_value} \\\\\n"
        latex_table += row
    latex_table += "\\bottomrule\n"
    latex_table += "\\end{tabular}\n"
    latex_table += f"\\caption{{Average Model Performance Metrics and Zuviel Percentage for {versuch_name}}}\n"
    latex_table += "\\label{tab:avg_model_metrics}\n"
    latex_table += "\\end{table}\n"
    os.makedirs("latex", exist_ok=True)
    with open(f"data/latex/avg_operators.tex", "w") as file:
        file.write(latex_table)
    return latex_table
