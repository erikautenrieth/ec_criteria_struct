import json
import re
import os
def save_json_to_file(json_data, file_path):
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(json_data)

def read_json(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return data

def parse_ann_file(file_path):
    entities = {}
    relationships = []
    scope_or = []
    with open(file_path, 'r', encoding='utf-8') as file:
        for line in file:
            parts = line.strip().split('\t')
            if len(parts) < 2:
                continue
            entry_type = parts[0][0]
            if entry_type == 'T':
                entity_id, entity_info = parts[0], parts[1:]
                label, position = entity_info[0].split(' ')[0], entity_info[0].split(' ')[1:]
                start, end = position[0], position[1]
                if ';' in start:
                    start = start.split(';')[0]
                if ';' in end:
                    end = end.split(';')[0]
                entities[entity_id] = {
                    'type': label,
                    'start': int(start),
                    'end': int(end),
                    'text': parts[2]
                }
            elif entry_type == 'R':  # Relationship
                relation_id, relation_info = parts[0], parts[1]
                relation_type, arg1, arg2 = relation_info.split(' ')[0], relation_info.split(' ')[1].split(':')[1], relation_info.split(' ')[2].split(':')[1]
                relationships.append({
                    'id': relation_id,
                    'type': relation_type,
                    'arg1': arg1,
                    'arg2': arg2
                })
            elif parts[0].startswith('*'):
                relationship_type = parts[1].split()[0]
                entity_ids = parts[1].split()[1:]
                scope_or.append({
                    'type': relationship_type,
                    'entities': entity_ids
                })
    return {
        'entities': entities,
        'relationships': relationships,
        'scope_or': scope_or
    }

def replace_ids_with_offsets(data):
    entities = data['entities']
    relationships = data['relationships']
    scope_or = data['scope_or']
    for relationship in relationships:
        if relationship['type'] in ["AND", "Has_negation"]:
            if relationship['arg1'] in entities and relationship['arg2'] in entities:
                start1, end1 = entities[relationship['arg1']]['start'], entities[relationship['arg1']]['end']
                start2, end2 = entities[relationship['arg2']]['start'], entities[relationship['arg2']]['end']
                # Sortierung der Offsets für konsistente Reihenfolge
                sorted_offsets = sorted([(start1, end1), (start2, end2)])
                relationship['arg1'] = f"{sorted_offsets[0][0]}-{sorted_offsets[0][1]}"
                relationship['arg2'] = f"{sorted_offsets[1][0]}-{sorted_offsets[1][1]}"
    new_scope_or = []
    for group in scope_or:
        offsets = sorted([f"{entities[id]['start']}-{entities[id]['end']}" for id in group['entities'] if id in entities], key=lambda x: int(x.split('-')[0]))
        new_scope_or.append({'type': group['type'], 'entities': offsets})
    updated_data = {
        'entities': entities,
        'relationships': relationships,
        'scope_or': new_scope_or
    }
    return updated_data

def remove_last_elements(data):
    # Entferne das letzte Element aus jeder 'OR' Gruppe, wenn mehr als ein Element vorhanden ist
    for or_group in data['scope_or']:
        if len(or_group['entities']) > 1:
            or_group['entities'].pop()  # Entfernt das letzte Element

    # Entferne das letzte Argument aus den 'AND' und 'Has_negation' Beziehungen
    for relationship in data['relationships']:
        if relationship['type'] in ["AND", "Has_negation"]:
            arg1_end = int(relationship['arg1'].split('-')[1])
            arg2_end = int(relationship['arg2'].split('-')[1])
            if arg1_end > arg2_end:
                relationship['arg1'] = relationship['arg2']  # Setze arg1 auf arg2, wenn arg1 das letzte ist
            # Entferne arg2, da wir nur das erste Argument behalten
            del relationship['arg2']

    return data

def insert_character_at_offsets(file_path, data):
    all_offsets = []
    label_for_offsets = {}
    inserted_positions = set()  # Zum Speichern bereits eingefügter Positionen

    # Verarbeiten von AND und Has_negation Beziehungen
    for relationship in data['relationships']:
        arg1_offset = f"{relationship['arg1']}"
        if relationship['type'] == "AND":
            label_for_offsets[arg1_offset] = ' [AND]'  # Nach dem Offset
            all_offsets.append(arg1_offset)
        elif relationship['type'] == "Has_negation":
            start_pos = int(arg1_offset.split('-')[0])  # Beginn des Offsets für Negation
            label_for_offsets[arg1_offset] = '[NOT] '  # Vor dem Offset
            all_offsets.append(arg1_offset)
            inserted_positions.add(start_pos)  # Markiere den Startpunkt für Negation

    # Verarbeiten von OR Gruppen
    for or_group in data['scope_or']:
        for offset in or_group['entities']:
            label_for_offsets[offset] = ' [OR]'  # Nach jedem Offset in der Gruppe
            all_offsets.append(offset)

    # Datei lesen
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Sortieren der Offsets in umgekehrter Reihenfolge, um die Positionen korrekt zu aktualisieren
    sorted_offsets = sorted([(int(offset.split('-')[1]), offset) for offset in all_offsets], reverse=True)

    # Einfügen der Labels in den Text
    for end_pos, offset in sorted_offsets:
        if end_pos not in inserted_positions:  # Überprüfe, ob das Tag bereits eingefügt wurde
            label = label_for_offsets[offset]
            insert_pos = int(offset.split('-')[0]) if label.strip() == '[NOT]' else end_pos
            content = content[:insert_pos] + label + content[insert_pos:]
            inserted_positions.add(insert_pos)

    # Ausgabe in eine neue Datei schreiben
    #with open("output_with_tags.txt", 'w') as file:
    #    file.write(content)

    return content

def criteria_to_json(text, output_file:str, type):
    sentences = text.strip().split('\n')
    sentences = [sentence.strip() for sentence in sentences if sentence.strip()]
    data = {f"{type}{i+1}": sentence for i, sentence in enumerate(sentences)}
    json_output = json.dumps(data, indent=2, ensure_ascii=False)
    # Ausgabe als json
    with open(output_file, "w", encoding="utf-8") as file:
        file.write(json_output)
    return json_output

def parse_to_structured_json(input_json, type):
    data = json.loads(input_json)

    def process_section(text, path, type):
        # Segmentierung des Textes basierend auf den Operatoren [OR], [AND], [NOT]
        segments = re.split(r'(\[OR\]|\[AND\]|\[NOT\])', text)
        #print(segments)  # Debug-Ausgabe der Segmente
        elements = []
        operators = []

        for segment in segments:
            segment = segment.strip()
            if segment in ['[OR]', '[AND]', '[NOT]']:
                operators.append(segment.strip('[]'))  # Sammeln der Operatoren ohne Klammern
            else:
                # Entfernung aller übriggebliebenen Tags und Streichen von Leerzeichen
                clean_segment = re.sub(r'\[\w+\]', '', segment).strip()
                if clean_segment:
                    elements.append(clean_segment)

        # Entscheidung, wie die Struktur aufgebaut sein soll, basierend auf der Anzahl der Elemente und Operatoren
        if len(elements) == 1 and not operators:
            return elements[0]  # Ein einzelnes Element ohne Operatoren
        else:
            structure = {}
            for index, element in enumerate(elements, 1):
                structure[f"{path}.{index}"] = element
            if operators:
                structure['operators'] = operators  # Speichern aller Operatoren unter einem eigenen Schlüssel
            return structure

    result_structure = {type: {}}
    index = 1
    for key, value in data.items():
        section_path = f"{type}{index}"
        result_structure[type][section_path] = process_section(value, section_path, type)
        index += 1

    return json.dumps(result_structure, indent=4, ensure_ascii=False, separators=(',', ': '))

def merge_files_in_directory(input_directory, output_directory):
    # Erstellen von Dictionaries, um die Pfade der IC- und EC-Dateien zu speichern
    ic_files = {}
    ec_files = {}
    # Dateien im Verzeichnis durchsuchen
    for filename in os.listdir(input_directory):
        if filename.endswith("_inc_parsed_2.json"):
            nct_number = filename.split("_inc_parsed_2.json")[0]
            ic_files[nct_number] = os.path.join(input_directory, filename)
        elif filename.endswith("_exc_parsed_2.json"):
            nct_number = filename.split("_exc_parsed_2.json")[0]
            ec_files[nct_number] = os.path.join(input_directory, filename)
    # Durchgehen aller NCT-Nummern, die sowohl IC- als auch EC-Dateien haben
    for nct_number in ic_files:
        if nct_number in ec_files:
            merge_ic_and_ec_files(nct_number, ic_files[nct_number], ec_files[nct_number], output_directory)

def merge_ic_and_ec_files(nct_number, ic_file_path, ec_file_path, output_directory):
    output_file_path = os.path.join(output_directory, f"{nct_number}.json")

    try:
        # Lese die IC-Daten
        with open(ic_file_path, 'r', encoding='utf-8') as ic_file:
            ic_data = json.load(ic_file)
        # Lese die EC-Daten
        with open(ec_file_path, 'r', encoding='utf-8') as ec_file:
            ec_data = json.load(ec_file)
        # Füge IC und EC Daten zusammen
        merged_data = {
            "IC": ic_data.get("IC", {}),
            "EC": ec_data.get("EC", {})
        }
        # Schreibe die zusammengeführten Daten in eine neue Datei
        with open(output_file_path, 'w', encoding='utf-8') as output_file:
            json.dump(merged_data, output_file, indent=4, ensure_ascii=False)
        print(f"Merge completed successfully for {nct_number}. Output file created: {output_file_path}")

    except Exception as e:
        print(f"An error occurred while merging files for {nct_number}: {e}")

def convert_json_to_model_input(input_directory, output_directory, indent):
    if not os.path.exists(output_directory):
        os.makedirs(output_directory)
    for filename in os.listdir(input_directory):
        if filename.endswith(".json"):
            input_file_path = os.path.join(input_directory, filename)
            output_file_path = os.path.join(output_directory, filename.replace(".json", ".txt"))

            try:
                with open(input_file_path, 'r', encoding='utf-8') as input_file:
                    data = json.load(input_file)

                # Konvertiere die Daten in einen JSON-String
                json_string = json.dumps(data, indent=indent)

                # Schreibe den JSON-String in eine Textdatei, vorformatiert für Modelleingabe
                with open(output_file_path, 'w', encoding='utf-8') as output_file:
                    output_file.write(json_string)
                print(f"File converted and saved successfully: {output_file_path}")

            except json.JSONDecodeError as e:
                print(f"Error decoding JSON from file {filename}: {e}")
            except Exception as e:
                print(f"An error occurred while processing file {filename}: {e}")

def extract_unique_ids(directory, type):
    unique_ids = []
    for filename in os.listdir(directory):
        base_id = filename.rsplit('.', 1)[0]
        if type in base_id and  base_id not in unique_ids:
            unique_ids.append(base_id)
    return unique_ids

def merge_inclusion_exclusion(input_directory, output_directory):
    if not os.path.exists(output_directory):
        os.makedirs(output_directory)
    inc_files = {}
    exc_files = {}

    for filename in os.listdir(input_directory):
        if filename.endswith(".txt"):
            nct_number = filename.split('_')[0]  # Annahme, dass NCT-Nummer vor einem Unterstrich steht
            if 'inc' in filename:
                inc_files[nct_number] = os.path.join(input_directory, filename)
            elif 'exc' in filename:
                exc_files[nct_number] = os.path.join(input_directory, filename)
    for nct_number in inc_files:
        if nct_number in exc_files:
            output_file_path = os.path.join(output_directory, f"{nct_number}_desc.txt")
            try:
                # Schreibe die kombinierten Inhalte in eine neue Datei
                with open(output_file_path, 'w', encoding='utf-8') as output_file:
                    output_file.write("Inclusion Criteria:\n\n")
                    with open(inc_files[nct_number], 'r', encoding='utf-8') as inc_file:
                        output_file.write(inc_file.read() + "\n")
                    output_file.write("\nExclusion Criteria:\n\n")
                    with open(exc_files[nct_number], 'r', encoding='utf-8') as exc_file:
                        output_file.write(exc_file.read() + "\n")
                print(f"Merged file created successfully: {output_file_path}")
            except Exception as e:
                print(f"An error occurred while merging files for {nct_number}: {e}")



def extract_main_entities(ann_data):
    result = {'entities': {}}
    for key, value in ann_data['entities'].items():
        result['entities'][key] = {'type': value['type'], 'text': value['text']}
    return result


def update_conditions(node, new_ann_data):
    if 'raw_text' in node:
        raw_text = node['raw_text']
        conditions_found = False
        for entity in new_ann_data['entities'].values():
            if entity['text'] in raw_text:
                conditions_found = True
                if entity['type'] not in node:
                    node[entity['type']] = []
                if entity['text'] not in node[entity['type']]:
                    node[entity['type']].append(entity['text'])
        if not conditions_found and 'Condition' in node:
            del node['Condition']
    for key in node:
        if isinstance(node[key], dict):
            update_conditions(node[key], new_ann_data)
