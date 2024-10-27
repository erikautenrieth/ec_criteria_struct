import json
import os
import shutil


### JSON to Text

def process_node(node):
    if 'raw_text' in node:
        return node['raw_text'].strip()
    if 'AND' in node:
        left_text = process_node(node['AND']['left'])
        right_text = process_node(node['AND']['right'])
        return combine_texts(left_text, right_text, '[AND]')
    if 'OR' in node:
        left_text = process_node(node['OR']['left'])
        right_text = process_node(node['OR']['right'])
        return combine_texts(left_text, right_text, '[OR]')
    if 'NOT' in node:
        left_text = process_node(node['NOT']['left'])
        return f"[NOT] {left_text}"
    return ""

def combine_texts(left_text, right_text, operator):
    combined = f"{left_text.strip()} {operator} {right_text.strip()}"
    if operator == '[AND]' and not right_text.strip():
        return combined + '\n'
    return combined

def json_to_text(json_file_path):
    with open(json_file_path, 'r', encoding="utf-8") as f:
        data = json.load(f)
    text = process_node(data)
    lines = [line.strip() for line in text.split('\n') if line.strip()]
    return '\n'.join(lines)

def process_all_files_in_directory(directory_path, output_directory, failure_directory):
    os.makedirs(output_directory, exist_ok=True)
    os.makedirs(failure_directory, exist_ok=True)
    for filename in os.listdir(directory_path):
        if filename.endswith("_exc.json") or filename.endswith("_inc.json"):
            json_file_path = os.path.join(directory_path, filename)
            try:
                output_text = json_to_text(json_file_path)
                output_file_path = os.path.join(output_directory, os.path.splitext(filename)[0] + ".txt")
                with open(output_file_path, 'w', encoding="utf-8") as output_file:
                    output_file.write(output_text)
            except Exception as e:
                shutil.move(json_file_path, os.path.join(failure_directory, filename))