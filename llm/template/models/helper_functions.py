import os
import json
import time


def read_text_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
        return content
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
    with open(file_path, 'r', encoding='utf-8') as file:
            data = json.load(file)
            json_string = json.dumps(data)
            return json_string





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