import sys
print(sys.path)
from helper_functions import *




ec_data= "schema_0"

txt_path = f'llms/input/label_1/{ec_data}.txt'


txt = read_text_file(txt_path)



print(txt)





