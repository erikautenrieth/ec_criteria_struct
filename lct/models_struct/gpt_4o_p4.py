import os
import tiktoken
import transformers
from helper_functions import *
from openai import OpenAI


batch_path = "eval_p4"
n_prompt = 6
n_shot = 15

model_name = "GPT-4o mini"


def read_matching_txt_files_gpt(study_folder, label_folder, shot_list):
    study_filenames = []
    label_filenames = []
    study_contents = []
    label_contents = []

    for filename in shot_list:
        study_filepath = os.path.join(study_folder, filename)
        label_filepath = os.path.join(label_folder, filename)
        print(f"Study file path: {study_filepath}")
        print(f"Label file path: {label_filepath}")
        
        if not os.path.exists(study_filepath):
            print(f"Study file does not exist: {study_filepath}")
        if not os.path.exists(label_filepath):
            print(f"Label file does not exist: {label_filepath}")

        study_filenames.append(f"{filename}_study")
        label_filenames.append(f"{filename}_label")

        label_contents.append(read_file_content(label_filepath))
        study_contents.append(read_file_content(study_filepath))
        
        print("Study:", study_contents)
    
    return study_filenames, study_contents, label_filenames, label_contents




client = OpenAI(
  api_key='sk-proj-HyHBjQ17zJgYhbn4HYooT3BlbkFJqChjIl1UUqCcBE4GSePi',
  #organization='$org-gd7cNf2GXYihWhZKxOmQyJpw',
  #project='$proj_tCdOTjZHERlqndZpJtHhQ32C',
)


transform_lct ="/work/eauten2s/ec_criteria_struct/lct"
model_desc = read_text_file(f"{transform_lct}/input/prompt/all_entitys_prompt2.txt")
command = read_text_file(f"{transform_lct}/input/prompt/all_entitys_prompt2.txt")

study_path = f"{transform_lct}/input/dataset_p4_prompt6/test/input/"
output_path = f"{transform_lct}/evaluate_struct/{batch_path}/model_output/{model_name}/output/"
os.makedirs(output_path, exist_ok=True)

study_files = os.listdir(study_path)[:1]

top_15_files = [
    "NCT03867344_exc.txt",
    "NCT03929718_exc.txt",
    "NCT03921502_exc.txt",
    "NCT03862027_exc.txt",
    "NCT03867942_inc.txt",
    "NCT03863639_inc.txt",
    "NCT03865953_inc.txt",
    "NCT03925142_exc.txt",
    "NCT03863847_exc.txt",
    "NCT03868709_exc.txt",
    "NCT03925454_exc.txt",
    "NCT03924024_inc.txt",
    "NCT03864822_exc.txt",
    "NCT03869073_exc.txt",
    "NCT03863366_exc.txt"
]

study_folder = f"{transform_lct}/input/dataset_p4_prompt6/train/input/"
label_folder = f"{transform_lct}/input/dataset_p4_prompt6/train/output/"
study_filenames, study_contents, label_filenames, label_contents = read_matching_txt_files_gpt(study_folder, label_folder, top_15_files)

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
        messages[-1] = {"role": "user", "content": f"{command} {test_file}"} 

    completion = client.chat.completions.create(
    model="gpt-4o-mini",# "gpt-4o", "gpt-3.5-turbo",
    messages=messages,
    temperature=0.5,
    )
    gen_output = completion.choices[0].message
    gen_output = gen_output.content
    print(f"{num_tokens_from_messages(messages)} prompt tokens counted.")
    print(gen_output)
    save_json(gen_output, f"{output_path}{model_name}_{file_name}.json")

