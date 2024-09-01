import os
import tiktoken
import transformers
from helper_functions import *
from openai import OpenAI

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


batch_path = "eval_p4"
n_shot = 10

# 15 shot zu viel für mini (5 geht)

model_name = f"GPT-4o_{n_shot}_shot_short_files"


client = OpenAI(
  api_key='sk-proj-HyHBjQ17zJgYhbn4HYooT3BlbkFJqChjIl1UUqCcBE4GSePi',
  #organization='$org-gd7cNf2GXYihWhZKxOmQyJpw',
  #project='$proj_tCdOTjZHERlqndZpJtHhQ32C',
)


transform_lct ="/work/eauten2s/ec_criteria_struct/lct"
#model_desc = read_text_file(f"{transform_lct}/input/prompt/all_entitys_prompt2.txt")
#command = "Structure the eligibility criteria based on the system input in JSON and extract the entities."

model_desc = read_text_file(f"{transform_lct}/input/prompt/all_entitys_prompt1.txt")
command = "Structure the eligibility criteria based on the system input in JSON and extract the entities."
study_path = f"{transform_lct}/input/dataset_p4_prompt1_new/test/input/"

output_path = f"{transform_lct}/evaluate_struct/{batch_path}/model_output/{model_name}/output/"
os.makedirs(output_path, exist_ok=True)

study_files = os.listdir(study_path)

additional = [
    "NCT03863509_inc.txt",
    "NCT03861819_inc.txt",
    "NCT03865589_inc.txt",
    "NCT03867344_exc.txt",
    "NCT03928158_exc.txt",
    "NCT03863418_inc.txt",
    "NCT03869086_exc.txt",
    "NCT03923894_exc.txt",
    "NCT03861559_exc.txt",
    "NCT03860350_exc.txt",
    "NCT03867942_inc.txt",
    "NCT03929718_exc.txt",
    "NCT03868475_exc.txt",
    "NCT03921502_exc.txt",
    "NCT03862027_exc.txt",
    "NCT03929718_exc.txt",
    "NCT03868475_exc.txt",
    "NCT03921502_exc.txt",
    "NCT03862027_exc.txt"
]


short_files = [
"NCT03860714_inc.txt",
"NCT03860012_exc.txt",
"NCT03860090_exc.txt",
"NCT03863756_exc.txt",
"NCT03926949_inc.txt",
"NCT03868865_exc.txt",
"NCT03867422_inc.txt",
"NCT03864653_exc.txt",
"NCT03922269_inc.txt",
"NCT03921138_exc.txt",
'NCT03860025_inc.txt',
'NCT03861221_inc.txt',
'NCT03861286_inc.txt',
'NCT03860779_inc.txt',
'NCT03860493_exc.txt',
'NCT03861689_inc.txt',
'NCT03863223_inc.txt',
'NCT03861078_exc.txt',
'NCT03863548_inc.txt',
'NCT03863873_inc.txt',
'NCT03864315_inc.txt',
'NCT03864549_inc.txt'
]


study_folder = f"{transform_lct}/input/dataset_p4_prompt1_new/train/input/"
label_folder = f"{transform_lct}/input/dataset_p4_prompt1_new/train/output/"

## Random Files
#all_label_files = [f for f in os.listdir(label_folder) if f.endswith('.txt')]
#random_files = random.sample(all_label_files, n_shot)


study_filenames, study_contents, label_filenames, label_contents = read_matching_txt_files(study_folder, label_folder, short_files)

studies = dict(zip(study_filenames, study_contents))
labels = dict(zip(label_filenames, label_contents))
messages = []

messages.append({"role": "system", "content": f"{model_desc}"})


for i in range(n_shot):
    messages.append({"role": "user", "content": f"{command} {studies[study_filenames[i]]}"})
    messages.append({"role": "assistant", "content": labels[label_filenames[i]]})

first_call = True


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
    model="gpt-4o",# "gpt-4o-mini", "gpt-3.5-turbo",
    messages=messages,
    temperature=0.5,
    )
    gen_output = completion.choices[0].message
    gen_output = gen_output.content
    print(f"{num_tokens_from_messages(messages)} prompt tokens counted.")
    print(gen_output)
    save_json(gen_output, f"{output_path}{model_name}_{file_name}.json")

