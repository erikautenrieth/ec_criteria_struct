import os
import torch
import torch.distributed as dist
import torch.multiprocessing as mp
from transformers import AutoTokenizer, AutoModelForCausalLM

def setup(rank, world_size):
    os.environ['MASTER_ADDR'] = '127.0.0.1'  # Lokale IP-Adresse für den Master-Knoten
    os.environ['MASTER_PORT'] = '12355'
    dist.init_process_group("nccl", rank=rank, world_size=world_size)

def cleanup():
    dist.destroy_process_group()

def run(rank, world_size):
    setup(rank, world_size)

    model_name = "tiiuae/falcon-180b"
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    model = AutoModelForCausalLM.from_pretrained(model_name)

    device = torch.device(f'cuda:{rank % torch.cuda.device_count()}')
    model.to(device)
    model = torch.nn.parallel.DistributedDataParallel(model, device_ids=[rank % torch.cuda.device_count()])

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
      5. Subject has received anti-myeloma treatment (radiotherapy is excluded) within 4 weeks oder 5 PK half-lives of the treatment, whichever longer, before the first study agent administration."""

    inputs = tokenizer(prompt + text, return_tensors="pt").to(device)
    outputs = model.generate(**inputs, max_length=500, do_sample=True, top_k=10, num_return_sequences=1)

    print(f"Rank {rank} result: {tokenizer.decode(outputs[0], skip_special_tokens=True)}")

    cleanup()

def main():
    world_size = 12  # Auf 12 Prozessoren (3 Knoten x 4 GPUs)
    mp.spawn(run, args=(world_size,), nprocs=world_size, join=True)

if __name__ == "__main__":
    main()
