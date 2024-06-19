from helper_functions import *
import os
import re


batch_path = "eval_p1_finetuned_testset"
model_name = " Naive greedy match"

transform_lct ="/work/eauten2s/ec_criteria_struct/lct"

#study_path = f"{transform_lct}/input/lct_txt/"
study_path = f"{transform_lct}/input/dataset/test/input/"
output_path = f"{transform_lct}/evaluate/{batch_path}/model_output/{model_name}/output/"
os.makedirs(output_path, exist_ok=True)

study_files = os.listdir(study_path)[0:100]



def apply_logical_operators(criteria_text):
    or_patterns = [
        r'(?<=,\s)or\b',  # "or" after a comma
        r'\band / or\b',
        r'\band/or\b',
        r'\bor\b'
    ]
    and_patterns = [
        r'\bwith\b',
        r'\bwho\b',
        r'\bin addition\b',
        r'\bplus\b',
        r'\band\b',
        r'\bbut\b',
        r'\bthat\b',
        r'\bdespite\b',
        r'\bhaving\b'
    ]
    not_patterns = [
        r'\bno\b',
        r'\bnot\b',
        r'\bnone\b',
        r'\bdon\'t\b',
        r'\bfree\b',
        r'\bprevent\b',
        r'\bInability\b',
        r'\black\b',
        r'\bimpossible\b',
        r'\boff\b',
        r'\bwithout\b',
        r'\bunable\b',
        r'\bnaive\b',
        r'\bexcluded\b',
        r'\babsence\b'
    ]

    # Apply OR patterns before "or"
    for pattern in or_patterns:
        criteria_text = re.sub(pattern, r' [OR] \g<0>', criteria_text)
    
    # Apply OR pattern after comma and after slash
    criteria_text = re.sub(r',\s(?!or\b)', r', [OR] ', criteria_text)
    criteria_text = re.sub(r'\/', r'/ [OR] ', criteria_text)

    # Apply AND patterns
    for pattern in and_patterns:
        criteria_text = re.sub(pattern, r' [AND] \g<0>', criteria_text)

    # Apply NOT patterns
    for pattern in not_patterns:
        criteria_text = re.sub(pattern, r' [NOT] \g<0>', criteria_text)

    return criteria_text.strip()

def parse_criteria_file(file_content):
    return apply_logical_operators(file_content)


for file in study_files:
    file_name = file.split(".")[0]
    test_file = read_text_file(study_path+file)

    output = parse_criteria_file(test_file)
    print(output)
    save_txt(output, f"{output_path}{file_name}.txt")
#%%
