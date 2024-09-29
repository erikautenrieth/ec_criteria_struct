from helper_functions import *
import os
import re


batch_path = "modelle_prompt2"
model_name = " Naive greedy match (LCT Prompt 2)"

transform ="/work/eauten2s/ec_criteria_struct/chia"
study_path = f"{transform}/input/chia_text_full/"
output_path = f"{transform}/evaluate/{batch_path}/model_output/{model_name}/output/"
os.makedirs(output_path, exist_ok=True)
study_files = os.listdir(study_path)

def naive_greedy_match( criteria_text : str) -> str:
    or_patterns =  [r'(?<=,\s)or\b', r'\band / or\b', r'\band/or\b', r'\bor\b']
    and_patterns = [r'\bwith\b', r'\bwho\b', r'\bin addition\b', r'\bplus\b',
                    r'\band\b', r'\bbut\b', r'\bthat\b', r'\bdespite\b', r'\bhaving\b']
    not_patterns = [r'\bno\b', r'\bnot\b', r'\bnone\b', r'\bdon\'t\b', r'\bfree\b',
                    r'\bprevent\b', r'\bInability\b', r'\black\b', r'\bimpossible\b', r'\boff\b',
                    r'\bwithout\b', r'\bunable\b', r'\bnaive\b', r'\bexcluded\b', r'\babsence\b']
    # Apply OR patterns before "or"
    for pattern in or_patterns:
        criteria_text = re.sub(pattern, r' [OR] \g<0>', criteria_text)
   
    # Apply OR pattern after comma and after slash
    criteria_text = re.sub(r',\s(?!or\b)', r', [OR] ', criteria_text)
    criteria_text = re.sub(r'\/', r'/ [OR] ', criteria_text)
    
    # Apply AND patterns
    for pattern in and_patterns:
        criteria_text = re.sub(pattern, r'[AND] \g<0>', criteria_text)
    # Apply NOT patterns
    for pattern in not_patterns:
        criteria_text = re.sub(pattern, r'[NOT] \g<0>', criteria_text)

    criteria_text = re.sub(r'\s(\[OR\]\s)+', ' [OR] ', criteria_text)
    criteria_text = re.sub(r'\s*(\[OR\]\s*)+', ' [OR] ', criteria_text)
    criteria_text = re.sub(r'\[OR\]\s*\[AND\]', '[AND]', criteria_text)

    return criteria_text.strip() 

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







def measure_average_runtime(num_runs=1000):
    import time
    import statistics
    total_times = []
    
    for _ in range(num_runs):
        start_time = time.time()
        
        for file in study_files:
            file_name = file.split(".")[0]
            test_file = read_text_file(study_path + file)
            output = naive_greedy_match(test_file)
            save_txt(output, f"{output_path}{file_name}.txt")
        
        end_time = time.time()
        elapsed_time = end_time - start_time
        total_times.append(elapsed_time)
    
    average_time = statistics.mean(total_times)
    median_time = statistics.median(total_times)
    std_dev = statistics.stdev(total_times)
    
    print(f"Number of runs: {num_runs}")
    print(f"Average time per run: {average_time:.4f} seconds")
    print(f"Median time per run: {median_time:.4f} seconds")
    print(f"Standard deviation: {std_dev:.4f} seconds")
    print(f"Total time for all runs: {sum(total_times):.2f} seconds")


#%%
