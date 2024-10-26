from helper_functions import *
import os
import re


batch_path = "evaluate/eval_full_chia"
model_name = " Naive greedy match (LCT Prompt 2)"
transform ="/work/eauten2s/ec_criteria_struct/chia"
study_path = f"{transform}/input/chia_text_full/"
output_path = f"{transform}/evaluate/{batch_path}/model_output/{model_name}/output/"
os.makedirs(output_path, exist_ok=True)
study_files = os.listdir(study_path)

def naive_greedy_match(criteria_text):
    """ Applies logical operators [AND] [OR] [NOT] to the given criteria text based on specified patterns.
        The patterns are based on Prompt 2 for the instructions of the Large Language Models. 
    Args:
        criteria_text (str): The criteria text to be processed.
    Returns:
        str: The processed criteria text with the predefined patterns replaced by corresponding operators.
    """

    patterns = {
        'OR': [r'(?<=,\s)or\b', r'\band / or\b', r'\band/or\b', r'\bor\b'],
        'AND': [r'\b(?:with|who|in addition|plus|and|but|that|despite|having)\b'],
        'NOT': [r'\b(?:no|not|none|don\'t|free|prevent|Inability|lack|impossible|off|without|unable|naive|excluded|absence)\b']
    }

    for op, pattern_list in patterns.items():
        for pattern in pattern_list:
            criteria_text = re.sub(pattern, f'[{op}] \g<0>', criteria_text)

    # Apply OR pattern after comma and slash
    criteria_text = re.sub(r',\s(?!or\b)', r', [OR] ', criteria_text)
    criteria_text = re.sub(r'\/', r'/ [OR] ', criteria_text)
    # Clean up wrong OR occurrences
    criteria_text = re.sub(r'\s*(\[OR\]\s*)+', ' [OR] ', criteria_text)
    criteria_text = re.sub(r'\[OR\]\s*\[AND\]', '[AND]', criteria_text)
    criteria_text = re.sub(r'\[OR\]\s*\[NOT\]', '[NOT]', criteria_text)
    return criteria_text.strip()


def parser():
    for file in study_files:
        file_name = file.split(".")[0]
        test_file = read_text_file(study_path + file)
        output = naive_greedy_match(test_file)
        print(output)
        save_txt(output, f"{output_path}{file_name}.txt")



parser()




