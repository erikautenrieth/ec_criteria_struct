import os
import json
import time
import psutil
import torch
import re
def read_text_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
        if content:
            print(f"Das File: {file_path} wurde erfolgreich geladen.")
            return content
        else:
            print("Das File ist leer.")
            return "Keine Daten vorhanden."
    except FileNotFoundError:
        return "Die Datei wurde nicht gefunden."
    except Exception as e:
        return f"Ein Fehler ist aufgetreten: {e}"


def parse_json(text):
    try:
        # Finde die erste öffnende und die letzte schließende Klammer für den JSON-String
        start_index = text.index('{')
        end_index = text.rindex('}') + 1  # +1, um die schließende Klammer einzuschließen
        json_string = text[start_index:end_index]
        json_data = json.loads(json_string)
        return json_data
    except ValueError as e:
        print(f"Error finding JSON in text: {e}")
        return None
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON: {e}")
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
        json.dump(data, f, ensure_ascii=False, indent=4)

    print(f"Die Daten wurden erfolgreich in '{file_path}' gespeichert.")


def save_json_phi(data, file_path):
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(data)
    print(f"Die Daten wurden erfolgreich in '{file_path}' gespeichert.")


def save_txt(data, file_path):
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(data)
    print(f"Die Daten wurden erfolgreich in '{file_path}' gespeichert.")


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




def print_cluster_resources():
    # CPU Informationen
    print(f"Anzahl der Kerne (logisch): {psutil.cpu_count(logical=True)}")
    print(f"Anzahl der Kerne (physisch): {psutil.cpu_count(logical=False)}")
    print(f"Auslastung der CPU-Kerne: {psutil.cpu_percent(interval=1, percpu=True)} %")

    # RAM Informationen
    ram = psutil.virtual_memory()
    print(f"Total RAM: {ram.total / (1024 ** 3):.2f} GB")
    print(f"Verfügbarer RAM: {ram.available / (1024 ** 3):.2f} GB")
    print(f"Verwendeter RAM: {ram.used / (1024 ** 3):.2f} GB")
    print(f"RAM Auslastung: {ram.percent} %")

    # Festplatteninformationen
    partitions = psutil.disk_partitions()
    for p in partitions:
        usage = psutil.disk_usage(p.mountpoint)
        print(f"Laufwerk: {p.device} ({p.fstype})")
        print(f"Total: {usage.total / (1024 ** 3):.2f} GB")
        print(f"Verwendet: {usage.used / (1024 ** 3):.2f} GB")
        print(f"Frei: {usage.free / (1024 ** 3):.2f} GB")
        print(f"Auslastung: {usage.percent} %")

    # GPU Informationen (falls verfügbar)
    if torch.cuda.is_available():
        print("CUDA ist verfügbar. Folgende GPUs sind erreichbar:")
        num_gpus = torch.cuda.device_count()
        print(f"Anzahl verfügbarer GPUs: {num_gpus}")
        for i in range(num_gpus):
            gpu = torch.cuda.get_device_properties(i)
            print(f"GPU {i}: {gpu.name}")
            print(f"  Totaler Speicher: {gpu.total_memory / (1024 ** 3):.2f} GB")
            print(f"  Multiprozessoren: {gpu.multi_processor_count}")
    else:
        print("Keine CUDA-fähigen GPUs gefunden.")

def print_cluster_resources_1():
    print(f"Anzahl der Kerne: {psutil.cpu_count(logical=True)}")
    print(f"Total: {psutil.virtual_memory().total / (1024 ** 3):.2f} GB")
    if torch.cuda.is_available():
        print("CUDA ist verfügbar. Folgende GPUs sind erreichbar:")
        num_gpus = torch.cuda.device_count()
        print(f"Anzahl verfügbarer GPUs: {num_gpus}")
        for i in range(num_gpus):
            print(f"GPU {i}: {torch.cuda.get_device_name(i)}")


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

def read_matching_txt_files(study_folder, label_folder, max_files):
    study_filenames = []
    label_filenames = []
    study_contents = []
    label_contents = []

    study_files = [f for f in os.listdir(study_folder) if f.endswith('.txt')][:max_files]
    label_files = [f for f in os.listdir(label_folder) if f.endswith('.txt')][:max_files]
    for filename in study_files:
        nct_number, inc_exc = extract_nct_number(filename)
        if nct_number:
            study_filenames.append(f"{nct_number}_{inc_exc}_study")
            filepath = os.path.join(study_folder, filename)
            study_contents.append(read_file_content(filepath))
    for filename in label_files:
        nct_number, inc_exc = extract_nct_number(filename)
        if nct_number:
            label_filenames.append(f"{nct_number}_{inc_exc}_label")
            filepath = os.path.join(label_folder, filename)
            label_contents.append(read_file_content(filepath))

    return study_filenames, study_contents, label_filenames, label_contents