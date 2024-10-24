from helper_functions import *
import os
import re


batch_path = "eval_full_chia"
model_name = " Naive greedy match (CHIA Prompt)"

transform ="/work/eauten2s/ec_criteria_struct/chia"
study_path = f"{transform}/input/chia_text_full/"
output_path = f"{transform}/evaluate/{batch_path}/model_output/{model_name}/output/"
os.makedirs(output_path, exist_ok=True)
study_files = os.listdir(study_path)

def naive_greedy_match(criteria_text: str) -> str:
    or_patterns = [r'(?<=,\s)or\b', r'\band / or\b', r'\band/or\b', r'\bor\b']
    and_patterns = [r'\bwith\b', r'\bto\b', r'\bwho\b', r'\bin addition\b', r'\bfor\b', r'\band\b', 
                    r'\bbut\b', r'\bthat\b', r'\bdespite\b', r'\bhaving\b', r'\bof\b', r'\bon\b', 
                    r'\bmay\b', r'\bas\b', r'\bwithin\b', r'\bby\b', r'\brequiring\b', r'\bshould\b', 
                    r'\bmust have\b', r'\bduring\b', r'\bhave\b', r'\bmust\b', r'\bare\b', r'\bdue\b', 
                    r'\baccording\b', r'\bcorresponding\b', r'\bincluding\b']
    not_patterns = [r'\bno\b', r'\bnot\b', r'\bdo not\b', r'\bother than\b', r'\bnone\b', r'\bdon\'t\b', 
                    r'\bfree\b', r'\bbesides\b', r'\bprevent\b', r'\bInability\b', r'\babsence\b', 
                    r'\bimpossible\b', r'\boff\b', r'\bwithout\b', r'\bunable\b', r'\bnaive\b', 
                    r'\bexcluded\b']

    # Apply OR patterns
    for pattern in or_patterns:
        criteria_text = re.sub(pattern, r' [OR] \g<0>', criteria_text)
    # Apply OR pattern after comma and after slash
    criteria_text = re.sub(r',\s(?!or\b)', r', [OR] ', criteria_text)
    criteria_text = re.sub(r'\/', r'/ [OR] ', criteria_text)
    # Apply AND patterns
    for pattern in and_patterns:
        criteria_text = re.sub(pattern, r'[AND] \g<0>', criteria_text)
    # Apply AND after "history of"
    criteria_text = re.sub(r'history of', r'history of [AND]', criteria_text)
    # Apply NOT patterns
    for pattern in not_patterns:
        criteria_text = re.sub(pattern, r'[NOT] \g<0>', criteria_text)
    # Clean up multiple occurrences and conflicts
    criteria_text = re.sub(r'\s(\[OR\]\s)+', ' [OR] ', criteria_text)
    criteria_text = re.sub(r'\s*(\[OR\]\s*)+', ' [OR] ', criteria_text)
    criteria_text = re.sub(r'\[OR\]\s*\[AND\]', '[AND]', criteria_text)
    # Remove operators before line breaks
    criteria_text = re.sub(r'\[(AND|OR|NOT)\]\s*\n', r'\n', criteria_text)
    return criteria_text.strip()



def parser():
    for file in study_files:
        file_name = file.split(".")[0]
        test_file = read_text_file(study_path + file)
        output = naive_greedy_match(test_file)
        print(output)
        save_txt(output, f"{output_path}{file_name}.txt")

parser()







