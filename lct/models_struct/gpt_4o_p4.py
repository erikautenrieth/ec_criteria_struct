import os
import tiktoken
import transformers
from helper_functions import *
from openai import OpenAI


batch_path = "eval_p4"
n_prompt = 6
n_shot = 5

model_name = "GPT-4o"


client = OpenAI(
  api_key='sk-proj-HyHBjQ17zJgYhbn4HYooT3BlbkFJqChjIl1UUqCcBE4GSePi',
  #organization='$org-gd7cNf2GXYihWhZKxOmQyJpw',
  #project='$proj_tCdOTjZHERlqndZpJtHhQ32C',
)


transform_lct ="/work/eauten2s/ec_criteria_struct/lct"
model_desc = read_text_file(f"{transform_lct}/input/prompt/all_entitys_prompt6.txt")
command = read_text_file(f"{transform_lct}/input/prompt/all_entitys_prompt6.txt")
study_path = f"{transform_lct}/input/dataset_p4_prompt6/test/input/"
output_path = f"{transform_lct}/evaluate_struct/model_output/{batch_path}/{model_name}/output/"
os.makedirs(output_path, exist_ok=True)

study_files = os.listdir(study_path)[:5]

shot_list = [
    "NCT03860545_exc.txt",
    "NCT03861156_inc.txt",
    "NCT03861637_exc.txt",
    "NCT03862118_exc.txt",
    "NCT03862677_inc.txt"
]

study_folder = f"{transform_lct}/input/dataset_p4_prompt6/train/input/"
label_folder = f'{transform_lct}/input/dataset_p4_prompt6/train/output/'
study_filenames, study_contents, label_filenames, label_contents = read_matching_txt_files(study_folder, label_folder, shot_list)

studies = dict(zip(study_filenames, study_contents))
labels = dict(zip(label_filenames, label_contents))
messages = []

messages.append({"role": "system", "content": f"{model_desc}"})


for i in range(n_shot):
    messages.append({"role": "user", "content": f"{command} {studies[study_filenames[i]]}"})
    messages.append({"role": "assistant", "content": labels[label_filenames[i]]})

first_call = True

def num_tokens_from_messages(messages, model="gpt-3.5-turbo"):
  """Returns the number of tokens used by a list of messages."""
  try:
      encoding = tiktoken.encoding_for_model(model)
  except KeyError:
      encoding = tiktoken.get_encoding("cl100k_base")
  if model == "gpt-3.5-turbo":  # note: future models may deviate from this
      num_tokens = 0
      for message in messages:
          num_tokens += 4  # every message follows <im_start>{role/name}\n{content}<im_end>\n
          for key, value in message.items():
              num_tokens += len(encoding.encode(value))
              if key == "name":  # if there's a name, the role is omitted
                  num_tokens += -1  # role is always required and always 1 token
      num_tokens += 2  # every reply is primed with <im_start>assistant
      return num_tokens
  else:
      raise NotImplementedError(f"""num_tokens_from_messages() is not presently implemented for model {model}.""")





for file in study_files:
    file_name = file.split(".")[0]
    print("File:", file_name, "\n")
    
    test_file = read_text_file(study_path+file)

    if first_call:
        messages.append({"role": "user", "content": f"{command} {test_file}"})
        first_call = False
    else:
        messages[-1] = {"role": "user", "content": f"{command} {test_file}"} # {cot} 

    completion = client.chat.completions.create(
    model="gpt-4o",# "gpt-3.5-turbo",
    messages=messages,
    temperature=0.7,
    )
    gen_output = completion.choices[0].message
    gen_output = gen_output.content
    print(f"{num_tokens_from_messages(messages)} prompt tokens counted.")
    print(gen_output)

    save_txt(gen_output, f"{output_path}{model_name}_{file_name}_{n_shot}_shot.txt")
