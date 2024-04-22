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


def save_json(data, file_path):
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)

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