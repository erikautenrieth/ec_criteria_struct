from transformers import AutoTokenizer, AutoModelForCausalLM
import transformers
import torch
import os

master_addr = os.environ.get('SLURM_LAUNCH_NODE_IPADDR', os.environ.get('SLURM_SRUN_COMM_HOST', 'localhost'))
os.environ['MASTER_ADDR'] = master_addr
os.environ['MASTER_PORT'] = '12355'
os.environ['WORLD_SIZE'] = os.environ['SLURM_NTASKS']
os.environ['RANK'] = os.environ['SLURM_PROCID']

model = "tiiuae/falcon-180b"

tokenizer = AutoTokenizer.from_pretrained(model)
pipeline = transformers.pipeline(
    "text-generation",
    model=model,
    tokenizer=tokenizer,
    torch_dtype=torch.bfloat16, # torch.bfloat16
    trust_remote_code=True,
    device_map="auto",
)


prompt = "Insert the logical operators [AND], [OR], [NOT] into the following eligibility criteria and return the text in full without deleting/replacing anything:"
text = """Inclusion criteria:
  1. Age ≥ 18, male or female;
  2. Subject must have had documented MM;
  3. At screening phase, subject must have measurable disease;
  4. Subject is in a state of progressive disease (PD);
  5. Subject must have life expectancy of no less than 6 months;
  6. Subject must have an ECOG (Eastern Cooperative Oncology Group) performance status score of 0~2;
Exclusion criteria:
  1. Subject has received anti-CD38 monoclonal antibody treatment previously;
  2. Subject has received CAR-T cell therapy previously;
  3. Subject has previously received allogenic stem cell transplant, or subject has received autologous stem cell transplant within 3 months before administration of the study agent;
  4. Primary refractory multiple myeloma (subject failed to generate any minimal response or any degree of response to any therapy);
  5. Subject has received anti-myeloma treatment (radiotherapy is excluded) within 4 weeks or 5 PK half-lives of the treatment, whichever longer, before the first study agent administration."""



sequences = pipeline(
   prompt+text,
    max_length=2000,
    do_sample=True,
    top_k=10,
    num_return_sequences=1,
    eos_token_id=tokenizer.eos_token_id,
)





for seq in sequences:
    print(f"Result: {seq['generated_text']}")
