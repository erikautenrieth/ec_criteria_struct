
import os
import re
import json

## Calculate Entity Metrics

# LCT Entitys
categories =  ['Contraindication', 'Eq-Value', 'Severity', 'Drug', 'Observation-Name', 'Age', 'Location', 'Organism-Name',
               'Encounter', 'Drug-Name', 'Ethnicity', 'Modifier', 'Condition', 'Eq-Unit', 'Eq-Temporal-Unit', 'Family-Member',
               'Organism', 'Other', 'Immunization-Name', 'Polarity', 'Condition-Type', 'Immunization', 'Eq-Operator',
               'Eq-Temporal-Recency', 'Procedure-Name', 'Indication', 'Exception', 'Study', 'Language', 'Coreference',
               'Provider', 'Acuteness', 'Life-Stage-And-Gender', 'Procedure', 'Risk', 'Death', 'Assertion', 'Allergy-Name',
               'Specimen', 'Negation', 'Code', 'Stability', 'Birth', 'Criteria-Count', 'Eq-Comparison', 'Condition-Name',
               'Insurance', 'Observation', 'Allergy', 'Eq-Temporal-Period']

def visit(node, category, entities):
    if isinstance(node, dict):
        if category in node:
            entities.extend(node[category])
        for value in node.values():
            visit(value, category, entities)
    elif isinstance(node, list):
        for item in node:
            visit(item, category, entities)

def calculate_metrics(label_data, model_data, metrics):
    for category in categories:
        label_entities = []
        visit(label_data, category, label_entities)
        model_entities = []
        visit(model_data, category, model_entities)
        true_positives = sum(entity in label_entities for entity in model_entities)
        false_positives = sum(entity not in label_entities for entity in model_entities)
        false_negatives = sum(entity not in model_entities for entity in label_entities)
        metrics[category]['true_positives'] += true_positives
        metrics[category]['false_positives'] += false_positives
        metrics[category]['false_negatives'] += false_negatives
        # Count total entities in labels and model outputs
        metrics[category]['total_label_entities'] += len(label_entities)
        metrics[category]['total_model_entities'] += len(model_entities)

def process_files(label_folder, model_folder):
    metrics = {category: {'true_positives': 0, 'false_positives': 0, 'false_negatives': 0,
                          'total_label_entities': 0, 'total_model_entities': 0} for category in categories}
    for filename in os.listdir(model_folder):
        if filename.endswith('.json'):
            model_path = os.path.join(model_folder, filename)
            match = re.search(r'NCT\d+_(?:exc|inc)', filename)
            if match:
                label_filename = f"{match.group(0)}.json"
                label_path = os.path.join(label_folder, label_filename)
                if os.path.exists(label_path):
                    try:
                        with open(label_path, 'r', encoding='utf-8') as label_file, open(model_path, 'r', encoding='utf-8') as model_file:
                            label_data = json.load(label_file)
                            model_data = json.load(model_file)
                            calculate_metrics(label_data, model_data, metrics)
                    except json.JSONDecodeError as e:
                        print(f"Error decoding JSON file: {model_path}")
                        print(f"Error message: {str(e)}")
    for category in categories:
        true_positives = metrics[category]['true_positives']
        false_positives = metrics[category]['false_positives']
        false_negatives = metrics[category]['false_negatives']
        precision = true_positives / (true_positives + false_positives) if (true_positives + false_positives) > 0 else 0
        recall = true_positives / (true_positives + false_negatives) if (true_positives + false_negatives) > 0 else 0
        f1 = 2 * (precision * recall) / (precision + recall) if (precision + recall) > 0 else 0
        accuracy = true_positives / (true_positives + false_positives + false_negatives) if (true_positives + false_positives + false_negatives) > 0 else 0
        metrics[category]['precision'] = precision
        metrics[category]['recall'] = recall
        metrics[category]['f1'] = f1
        metrics[category]['accuracy'] = accuracy
    return metrics

def calculate_average_metrics(metrics):
    # Berechne den Durchschnitt der Metriken für alle Entitäten
    total_metrics = {
        'true_positives': 0,
        'false_positives': 0,
        'false_negatives': 0,
        'total_label_entities': 0,
        'total_model_entities': 0,
        'precision': 0,
        'recall': 0,
        'f1': 0,
        'accuracy': 0
    }
    num_entities = 50
    for entity, entity_metrics in metrics.items():
        if entity != 'total':
            for key in total_metrics.keys():
                total_metrics[key] += entity_metrics[key]
    for key in ['precision', 'recall', 'f1', 'accuracy']:
        total_metrics[key] /= num_entities
    metrics['total'] = total_metrics
    return metrics

def calculate_totals_based_on_tp(metrics):
    total_tp = 0
    total_fp = 0
    total_fn = 0
    valid_entities_count = 0
    for entity, values in metrics.items():
        if entity != 'total':
            total_tp += values['true_positives']
            total_fp += values['false_positives']
            total_fn += values['false_negatives']
            valid_entities_count += 1
    total_precision = total_tp / (total_tp + total_fp) if (total_tp + total_fp) > 0 else 0
    total_recall = total_tp / (total_tp + total_fn) if (total_tp + total_fn) > 0 else 0
    total_f1 = 2 * (total_precision * total_recall) / (total_precision + total_recall) if (total_precision + total_recall) > 0 else 0
    metrics['total'] = {
        'true_positives': total_tp,
        'false_positives': total_fp,
        'false_negatives': total_fn,
        'precision': total_precision,
        'recall': total_recall,
        'f1': total_f1
    }
    return metrics


def zero_metrics(metrics):
    zero_f1_entities = {}
    for entity, values in metrics.items():
        if entity != 'total' and values['f1'] == 0:
            zero_f1_entities[entity] = values
    return zero_f1_entities