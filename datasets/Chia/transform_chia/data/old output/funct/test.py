import re
import json
def parse_annotations(annotations):
    relations = {}
    entity_positions = {}
    for line in annotations.strip().split('\n'):
        parts = line.split('\t')
        if parts[0].startswith('T'):
            entity_id = parts[0]
            content = parts[1].split(' ')
            # Adjust to handle multi-segment positions
            position_parts = [int(num) for part in content[1:] for num in part.split(';')]
            entity_positions[entity_id] = position_parts
        elif parts[0].startswith('R'):
            details = parts[1].split(' ')
            relation_type = details[0]
            arg1 = details[1].split(':')[1]
            arg2 = details[2].split(':')[1]
            if arg1 in entity_positions and arg2 in entity_positions:
                relations[parts[0]] = (relation_type, arg1, arg2)
    return relations, entity_positions

def apply_relations_to_text(text, annotations):
    relations, entity_positions = parse_annotations(annotations)
    marked_text = text[:]
    for rel_id, (rel_type, arg1, arg2) in sorted(relations.items(), key=lambda x: -entity_positions[x[1][1]][0]):
        # Handling multi-segment entities
        pos1 = entity_positions[arg1]
        pos2 = entity_positions[arg2]
        for i in range(0, len(pos1), 2):
            start1, end1 = pos1[i], pos1[i+1]
            marked_text = marked_text[:start1] + f'[{rel_type}]' + marked_text[start1:end1] + '[/{rel_type}]' + marked_text[end1:]
        for j in range(0, len(pos2), 2):
            start2, end2 = pos2[j], pos2[j+1]
            marked_text = marked_text[:start2] + f'[{rel_type}]' + marked_text[start2:end2] + '[/{rel_type}]' + marked_text[end2:]
    return marked_text

def main(txt_filepath, ann_filepath):
    text = load_file(txt_filepath)
    annotations = load_file(ann_filepath)
    marked_text = apply_relations_to_text(text, annotations)
    print(marked_text)



    import re

def parse_to_structured_json(input_json):
    data = json.loads(input_json)

    def process_section(text, path):
        # Initialisiere die rekursive Funktion zur Strukturierung der Segmente
        def recursive_structure(segments, base_path):
            if not segments:
                return {}

            structure = {}
            current_operator = None
            sub_elements = []
            sub_path_index = 1

            for segment in segments:
                segment = segment.strip()
                if segment in ['[OR]', '[AND]', '[NEG]']:
                    if current_operator:
                        # Schließe die aktuelle Gruppe von Elementen ab und beginne eine neue
                        if len(sub_elements) > 1 or isinstance(sub_elements[0], dict):
                            structure[f"{base_path}.{sub_path_index}"] = {current_operator: recursive_structure(sub_elements, f"{base_path}.{sub_path_index}")}
                        else:
                            structure[f"{base_path}.{sub_path_index}"] = sub_elements[0]
                        sub_elements = []
                        sub_path_index += 1
                    current_operator = "OR" if segment == '[OR]' else "AND" if segment == '[AND]' else "NOT"
                else:
                    clean_segment = re.sub(r'\[\w+\]', '', segment).strip()
                    if clean_segment:
                        # Segment kann mehrere Operatoren enthalten, rekursiv weiter zerlegen
                        more_segments = re.split(r'(\[OR\]|\[AND\]|\[NEG\])', clean_segment)
                        if len(more_segments) > 1:
                            sub_elements.append(recursive_structure(more_segments, f"{base_path}.{sub_path_index}"))
                        else:
                            sub_elements.append(clean_segment)

            # Behandlung des letzten Segments nach Schleifendurchlauf
            if current_operator and sub_elements:
                if len(sub_elements) > 1 or isinstance(sub_elements[0], dict):
                    structure[f"{base_path}.{sub_path_index}"] = {current_operator: recursive_structure(sub_elements, f"{base_path}.{sub_path_index}")}
                else:
                    structure[f"{base_path}.{sub_path_index}"] = sub_elements[0]
            elif sub_elements:
                structure = sub_elements[0] if len(sub_elements) == 1 else sub_elements

            return structure

        # Aufteilen der Eingabe in Segmente basierend auf den Operatoren
        initial_segments = re.split(r'(\[OR\]|\[AND\]|\[NEG\])', text)
        return recursive_structure(initial_segments, path)

    result_structure = {"EC": {}}
    index = 1

    # Iterieren über die Eingabe und Verarbeiten jedes Abschnitts
    for key, value in data.items():
        section_path = f"EC{index}"
        result_structure["EC"][section_path] = process_section(value, section_path)
        index += 1

    return json.dumps(result_structure, indent=4, ensure_ascii=False)


## Aktuelleste Version
# Versin 1 es werden nur die ersten Operatoren erkannt
def parse_to_structured_json(input_json):
    data = json.loads(input_json)

    def process_section(text, path):
        # Segmentierung des Textes basierend auf den Operatoren [OR], [AND], [NOT]
        segments = re.split(r'(\[OR\]|\[AND\]|\[NOT\])', text)
        print(segments)  # Debug-Ausgabe der Segmente
        structure = {}
        operator = None
        elements = []

        # Durchlaufen der Segmente und Erkennen von Operatoren
        for segment in segments:
            segment = segment.strip()
            if segment in ['[OR]', '[AND]', '[NOT]']:
                operator = segment.strip('[]')  # Entfernt die Klammern und verwendet das Ergebnis als Operator
            else:
                # Entfernung aller übriggebliebenen Tags und Streichen von Leerzeichen
                clean_segment = re.sub(r'\[\w+\]', '', segment).strip()
                if clean_segment:
                    elements.append(clean_segment)

        if operator:
            structure['operator'] = operator
            for index, element in enumerate(elements, 1):
                structure[f"{path}.{index}"] = element
        else:
            # Wenn kein Operator vorhanden ist, füge alle Elemente direkt hinzu, ohne weitere Unterteilung
            if elements:
                structure = ' '.join(elements)

        return structure

    result_structure = {"EC": {}}
    index = 1

    # Iterieren über die Eingabe und Verarbeiten jedes Abschnitts
    for key, value in data.items():
        section_path = f"EC{index}"
        result_structure["EC"][section_path] = process_section(value, section_path)
        index += 1

    return json.dumps(result_structure, indent=4, ensure_ascii=False)