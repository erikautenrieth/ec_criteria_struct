from llm.template.helper.helper_functions import read_text_file


# export PYTHONPATH="${PYTHONPATH}:/home/eautenrieth/masterthesis/Masterthesis/llm"

ec_data= "ec1"
txt_path = f'llm/template/inputs/{ec_data}.txt'

txt = read_text_file(txt_path)

print(txt)

