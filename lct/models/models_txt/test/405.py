import os
import torch
import torch.distributed as dist
import transformers
from helper_functions import *

def setup(rank, world_size):
    os.environ['MASTER_ADDR'] = os.getenv('SLURM_LAUNCH_NODE_IPADDR', 'localhost')
    os.environ['MASTER_PORT'] = os.getenv('MASTER_PORT', '12355')
    dist.init_process_group(
        backend="nccl",
        init_method="env://",
        world_size=world_size,
        rank=rank
    )

def cleanup():
    dist.destroy_process_group()

def function_main(rank, world_size):
    setup(rank, world_size)
   
    torch.cuda.set_device(rank % torch.cuda.device_count())
    torch.cuda.empty_cache()
    
    if rank == 0:
        print(f"Gesamtanzahl der GPUs: {world_size}")
        print(f"Anzahl der GPUs auf diesem Knoten: {torch.cuda.device_count()}")

    batch_path = "modelle_prompt2"
    n_prompt = 6
    n_shot = 5
    model_id = "meta-llama/Meta-Llama-3.1-405B-Instruct"
    model_name = "Llama-3.1-405B-Instruct"
    transform_lct = "/work/eauten2s/ec_criteria_struct/lct"
    
    model_desc = read_text_file(f"{transform_lct}/input/prompt/p{n_prompt}.txt")
    command = read_text_file(f"{transform_lct}/input/prompt/p{n_prompt}.txt")
    study_path = f"{transform_lct}/input/dataset/test/input/"
    output_path = f"{transform_lct}/evaluate_parse_1/{batch_path}/model_output/{model_name}_{n_shot}_shot/output/"
    
    if rank == 0:
        os.makedirs(output_path, exist_ok=True)

    study_files = os.listdir(study_path)
    shot_list = [
        "NCT03865433.txt",
        "NCT03860324.txt",
        "NCT03860233.txt",
        "NCT03923231.txt",
        "NCT03930121.txt"
    ]
    study_folder = f"{transform_lct}/input/lct_txt/"
    label_folder = f'{transform_lct}/input/lct_p1'
    study_filenames, study_contents, label_filenames, label_contents = read_matching_txt_files(study_folder, label_folder, shot_list)
    studies = dict(zip(study_filenames, study_contents))
    labels = dict(zip(label_filenames, label_contents))
    
    messages = []
    messages.append({"role": "system", "content": f"{model_desc}"})
    for i in range(n_shot):
        messages.append({"role": "user", "content": f"{command} {studies[study_filenames[i]]}"})
        messages.append({"role": "assistant", "content": labels[label_filenames[i]]})

    pipeline = transformers.pipeline(
        "text-generation",
        model=model_id,
        model_kwargs={"torch_dtype": torch.bfloat16},
        device_map={"": rank % torch.cuda.device_count()},
    )
    pipeline.model = torch.nn.parallel.DistributedDataParallel(pipeline.model, device_ids=[rank % torch.cuda.device_count()])

    for i, file in enumerate(study_files):
        if i % world_size != rank:
            continue

        file_name = file.split(".")[0]
        if rank == 0:
            print(f"Processing File: {file_name} on rank {rank}\n")
        
        test_file = read_text_file(study_path + file)
        messages[-1] = {"role": "user", "content": f"{command} {test_file}"}
        
        prompt = pipeline.tokenizer.apply_chat_template(
            messages,
            tokenize=False,
            add_generation_prompt=True
        )
        
        terminators = [
            pipeline.tokenizer.eos_token_id,
            pipeline.tokenizer.convert_tokens_to_ids("<|eot_id|>")
        ]
        
        torch.cuda.empty_cache()
        with torch.cuda.amp.autocast():
            outputs = pipeline(
                prompt,
                max_new_tokens=2048,
                eos_token_id=terminators,
                do_sample=True,
                temperature=0.5,
                top_p=0.95,
            )
        
        gen_output = outputs[0]["generated_text"][len(prompt):]
        save_txt(gen_output, f"{output_path}{model_name}_{file_name}_{n_shot}_shot_rank{rank}.txt")

    cleanup()

if __name__ == "__main__":
    world_size = int(os.environ["WORLD_SIZE"])
    rank = int(os.environ["RANK"])
    world_size = int(os.environ.get("WORLD_SIZE", os.environ.get("SLURM_NTASKS", 1)))
    rank = int(os.environ.get("RANK", os.environ.get("SLURM_PROCID", 0)))
    local_rank = int(os.environ.get("LOCAL_RANK", os.environ.get("SLURM_LOCALID", 0)))
    function_main(rank, world_size)