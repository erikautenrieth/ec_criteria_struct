import re

def find_word_offsets(text):
    offsets = []
    start = 0
    while start < len(text):
        if text[start].isspace():
            start += 1
            continue
        end = start
        while end < len(text) and not text[end].isspace():
            end += 1

        offsets.append(start)
        offsets.append(end)
        start = end
    return offsets

def compare_offsets(word_offsets, sorted_offsets):
    word_positions = set(word_offsets)

    for _, offset in sorted_offsets:
        start, end = map(int, offset.split('-'))
        if start not in word_positions:
            return False
        if end not in word_positions:
            return False

    return True



def check_operators_spacing(text):
    pattern = re.compile(r'\[(AND|OR|NOT)\][a-zA-Z]')
    matches = pattern.findall(text)
    if matches:
        return False
    return True


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
            label_for_offsets[offset] = ' [OR]'
            all_offsets.append(offset)

    # Datei lesen
    with open(file_path, 'r', encoding='utf-8', newline="\n") as file:
        content = file.read()


    sorted_offsets = sorted([(int(offset.split('-')[1]), offset) for offset in all_offsets], reverse=True)
    bool_ob_es_geht = compare_offsets(find_word_offsets(content), sorted_offsets)
    #print(find_word_offsets(content))
    #print(sorted_offsets)
    print(bool_ob_es_geht)
    if bool_ob_es_geht:
        for end_pos, offset in sorted_offsets:
            if end_pos not in inserted_positions:
                label = label_for_offsets[offset]
                insert_pos = int(offset.split('-')[0]) if label.strip() == '[NOT]' else end_pos
                content = content[:insert_pos] + label + content[insert_pos:]
                inserted_positions.add(insert_pos)
        if  not check_operators_spacing(content):
            with open(file_path, 'r', encoding='utf-8') as file:
                content = file.read()
            all_offsets = []
            label_for_offsets = {}
            inserted_positions = set()

            for relationship in data['relationships']:
                arg1_offset = f"{relationship['arg1']}"
                if relationship['type'] == "AND":
                    label_for_offsets[arg1_offset] = ' [AND]'
                    all_offsets.append(arg1_offset)
                elif relationship['type'] == "Has_negation":
                    start_pos = int(arg1_offset.split('-')[0])
                    label_for_offsets[arg1_offset] = '[NOT] '
                    all_offsets.append(arg1_offset)
                    inserted_positions.add(start_pos)
            for or_group in data['scope_or']:
                for offset in or_group['entities']:
                    label_for_offsets[offset] = ' [OR]'
                    all_offsets.append(offset)
            sorted_offsets = sorted([(int(offset.split('-')[1]), offset) for offset in all_offsets], reverse=True)
            for end_pos, offset in sorted_offsets:
                if end_pos not in inserted_positions:
                    label = label_for_offsets[offset]
                    insert_pos = int(offset.split('-')[0]) if label.strip() == '[NOT]' else end_pos
                    content = content[:insert_pos] + label + content[insert_pos:]
                    inserted_positions.add(insert_pos)

    else:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
        for end_pos, offset in sorted_offsets:
            if end_pos not in inserted_positions:
                label = label_for_offsets[offset]
                insert_pos = int(offset.split('-')[0]) if label.strip() == '[NOT]' else end_pos
                content = content[:insert_pos] + label + content[insert_pos:]
                inserted_positions.add(insert_pos)
        if not check_operators_spacing(content):

            with open(file_path, 'r', encoding='utf-8', newline="\n") as file:
                content = file.read()
            all_offsets = []
            label_for_offsets = {}
            inserted_positions = set()

            for relationship in data['relationships']:
                arg1_offset = f"{relationship['arg1']}"
                if relationship['type'] == "AND":
                    label_for_offsets[arg1_offset] = ' [AND]'
                    all_offsets.append(arg1_offset)
                elif relationship['type'] == "Has_negation":
                    start_pos = int(arg1_offset.split('-')[0])
                    label_for_offsets[arg1_offset] = '[NOT] '
                    all_offsets.append(arg1_offset)
                    inserted_positions.add(start_pos)
            for or_group in data['scope_or']:
                for offset in or_group['entities']:
                    label_for_offsets[offset] = ' [OR]'
                    all_offsets.append(offset)
            sorted_offsets = sorted([(int(offset.split('-')[1]), offset) for offset in all_offsets], reverse=True)
            for end_pos, offset in sorted_offsets:
                if end_pos not in inserted_positions:
                    label = label_for_offsets[offset]
                    insert_pos = int(offset.split('-')[0]) if label.strip() == '[NOT]' else end_pos
                    content = content[:insert_pos] + label + content[insert_pos:]
                    inserted_positions.add(insert_pos)


    return content