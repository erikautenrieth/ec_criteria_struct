import os
import json
import time
import psutil
import re
import random
def save_json(data, file_path):
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(data)
def read_json(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return data
def read_text_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
        if content:
            return content
        else:
            return "Keine Daten vorhanden."
    except FileNotFoundError:
        return "Die Datei wurde nicht gefunden."
    except Exception as e:
        return f"Ein Fehler ist aufgetreten: {e}"


def parse_json(text):
    try:
        start_index = text.index('{')
        end_index = text.rindex('}') + 1  # +1, um die schließende Klammer einzuschließen
        json_string = text[start_index:end_index]
        json_data = json.loads(json_string)
        return json_data
    except ValueError as e:
        return None
    except json.JSONDecodeError as e:
        return None


def load_json_string(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            data = json.load(file)
            json_string = json.dumps(data)
            return json_string
    except FileNotFoundError:
        return "Die Json Datei wurde nicht gefunden."
    except Exception as e:
        return f"Ein Fehler ist aufgetreten: {e}"

def save_json(data, file_path):
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(data)


def save_txt(data, file_path):
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(data)

def time_it(func):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        elapsed_time = end_time - start_time
        minutes, seconds = divmod(elapsed_time, 60)
        print(f"Laufzeit: {int(minutes)} Minuten und {int(seconds)} Sekunden")
        return result
    return wrapper

def read_all_files_from_directory(directory_path):
    files_content = {}
    try:
        for file_name in os.listdir(directory_path):
            file_path = os.path.join(directory_path, file_name)
            content = read_text_file(file_path)
            key = os.path.splitext(file_name)[0]
            files_content[key] = content
    except FileNotFoundError:
        print(f"Das Verzeichnis {directory_path} wurde nicht gefunden.")
    except Exception as e:
        print(f"Ein Fehler ist aufgetreten: {e}")

    return files_content

### Load n-Shot Data

def extract_nct_number(filename):
    match = re.search(r'(NCT\d{8})_(inc|exc)', filename)
    return match.groups() if match else (None, None)

def read_file_content(filepath):
    with open(filepath, 'r', encoding='utf-8') as file:
        return file.read()


def read_matching_txt_files(study_folder, label_folder, shot_list):
    study_filenames = []
    label_filenames = []
    study_contents = []
    label_contents = []
    for filename in shot_list:
        study_filepath = os.path.join(study_folder, filename)
        label_filepath = os.path.join(label_folder, filename)
        if os.path.isfile(study_filepath) and os.path.isfile(label_filepath):
            study_filenames.append(f"{filename}_study")
            label_filenames.append(f"{filename}_label")
            study_contents.append(read_file_content(study_filepath))
            label_contents.append(read_file_content(label_filepath))
    return study_filenames, study_contents, label_filenames, label_contents

def read_random_matching_txt_files(study_folder, label_folder, n):
    study_filenames = []
    label_filenames = []
    study_contents = []
    label_contents = []
    all_filenames = [f for f in os.listdir(study_folder) if f.endswith('.txt')]
    selected_filenames = random.sample(all_filenames, n)
    for filename in selected_filenames:
        study_filepath = os.path.join(study_folder, filename)
        label_filepath = os.path.join(label_folder, filename)
        if os.path.isfile(study_filepath) and os.path.isfile(label_filepath):
            study_filenames.append(f"{filename}_study")
            label_filenames.append(f"{filename}_label")
            study_contents.append(read_file_content(study_filepath))
            label_contents.append(read_file_content(label_filepath))
    return study_filenames, study_contents, label_filenames, label_contents


def read_matching_p3_files(study_folder, n_shot):
    study_filenames = []
    study_contents = []
    label_filenames = []
    label_contents = []
    loaded_files = 0
    for file_name in os.listdir(study_folder):
        if file_name.endswith(".txt"):
            study_filenames.append(file_name)
            study_file_path = os.path.join(study_folder, file_name)
            with open(study_file_path, 'r', encoding='utf-8') as file:
                study_contents.append(file.read())
            label_file_name = file_name.replace(".txt", "_p3.json")
            label_file_path = os.path.join(study_folder, label_file_name)
            if os.path.exists(label_file_path):
                label_filenames.append(label_file_name)
                with open(label_file_path, 'r', encoding='utf-8') as file:
                    label_contents.append(file.read())
            else:
                label_filenames.append(None)
                label_contents.append(None)
            loaded_files += 1
            if loaded_files == n_shot * 2:
                break
    return study_filenames, study_contents, label_filenames, label_contents

def read_matching_txt_files_old(study_folder, label_folder, max_files):
    study_filenames = []
    label_filenames = []
    study_contents = []
    label_contents = []
    study_files = [f for f in os.listdir(study_folder) if f.endswith('.txt')][:max_files]
    label_files = [f for f in os.listdir(label_folder) if f.endswith('.txt')][:max_files]
    for filename in study_files:
        if filename in label_files:
            study_filenames.append(f"{filename}_study")
            label_filenames.append(f"{filename}_label")
            study_filepath = os.path.join(study_folder, filename)
            label_filepath = os.path.join(label_folder, filename)
            study_contents.append(read_file_content(study_filepath))
            label_contents.append(read_file_content(label_filepath))
    return study_filenames, study_contents, label_filenames, label_contents