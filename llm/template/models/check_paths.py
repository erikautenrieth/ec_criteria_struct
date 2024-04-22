import sys
#print(sys.path)
from helper_functions import read_text_file, save_json




ec_data= "ec1"
txt_path = f'llm/template/input/{ec_data}.txt'
json_path = f'llm/template/output/{ec_data}.json'


txt = read_text_file(txt_path)
print(txt)


#save_json(txt, json_path)


