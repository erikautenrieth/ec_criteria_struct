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

def extract_offsets(text):
    and_offsets = []
    or_offsets = []
    not_offsets = []

    # Finde AND-Beziehungen
    and_matches = re.finditer(r'R\d+\s*\bAND\b', text)
    for match in and_matches:
        and_offsets.append((match.start(), match.end()))

    # Finde OR-Beziehungen
    or_matches = re.finditer(r'\*\s*\bOR\b', text)
    for match in or_matches:
        or_offsets.append((match.start(), match.end()))

    # Finde NOT-Beziehungen
    not_matches = re.finditer(r'\bNOT\b', text)
    for match in not_matches:
        not_offsets.append((match.start(), match.end()))

    return and_offsets, or_offsets, not_offsets

text = read_ann_file(ann_file)

and_offsets, or_offsets, not_offsets = extract_offsets(text)

print("AND-Beziehungen:")
for start, end in and_offsets:
    print(f"Offset: {start}-{end}")

print("\nOR-Beziehungen:")
for start, end in or_offsets:
    print(f"Offset: {start}-{end}")

print("\nNOT-Beziehungen:")
for start, end in not_offsets:
    print(f"Offset: {start}-{end}")