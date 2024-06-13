from helper_functions import *
import os
import re


batch_path = "eval_p1"
model_name = "ec_parser"

transform_lct ="/work/eauten2s/ec_criteria_struct/lct"

study_path = f"{transform_lct}/input/lct_txt/"
output_path = f"{transform_lct}/evaluate/{batch_path}/model_output/{model_name}/output/"
os.makedirs(output_path, exist_ok=True)

study_files = os.listdir(study_path)[0:100]



def apply_logical_operators(criteria_text):
    # Define regex patterns for the logical operators
    or_patterns = [
        r'(\bor\b|\band / or\b|\band/or\b|\/)',
        r',\s'
    ]
    and_patterns = [
        r'(\bwith\b|\bwho\b|\bin addition\b|\bplus\b|\band\b|\bbut\b|\bthat\b|\bdespite\b|\bhaving\b)'
    ]
    not_patterns = [
        r'(\bno\b|\bnot\b|\bnone\b|\bdon\'t\b|\bfree\b|\bprevent\b|\bInability\b|\black\b|\bimpossible\b|\boff\b|\bwithout\b|\bunable\b|\bnaive\b|\bexcluded\b|\babsence\b)'
    ]

    # Apply OR patterns
    for pattern in or_patterns:
        criteria_text = re.sub(pattern, r' [OR] \g<0>', criteria_text)

    # Apply AND patterns
    for pattern in and_patterns:
        criteria_text = re.sub(pattern, r' [AND] \g<0>', criteria_text)

    # Apply NOT patterns
    for pattern in not_patterns:
        criteria_text = re.sub(pattern, r' [NOT] \g<0>', criteria_text)

    # Clean up any misplaced operators at the start of lines
    criteria_text = re.sub(r'\n\s*\[AND\]', '', criteria_text)
    criteria_text = re.sub(r'\n\s*\[OR\]', '', criteria_text)
    criteria_text = re.sub(r'\n\s*\[NOT\]', '', criteria_text)

    return criteria_text.strip()

def parse_criteria_file(file_content):
    return apply_logical_operators(file_content)



for file in study_files:
    file_name = file.split(".")[0]
    test_file = read_text_file(study_path+file)

    output = parse_criteria_file(test_file)
    print(output)
    save_txt(output, f"{output_path}{model_name}_{file_name}.txt")
#%%
