import os
import torch
import torch.distributed as dist
import transformers
from helper_functions import *

def setup(rank, world_size):
    # Initialize the process group
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
    
    # Bereinigen des GPU-Speichers vor dem Start
    torch.cuda.empty_cache()
    num_gpus = torch.cuda.device_count()
    print(f"Anzahl der sichtbaren GPUs: {num_gpus}")

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

    # Setup pipeline with mixed precision and distributed training
    pipeline = transformers.pipeline(
        "text-generation",
        model=model_id,
        model_kwargs={"torch_dtype": torch.bfloat16},
        device_map={"": rank},  # Map to the current GPU
    )
    pipeline.model = torch.nn.parallel.DistributedDataParallel(pipeline.model)

    first_call = True
    for file in study_files:
        file_name = file.split(".")[0]
        print("File:", file_name, "\n")
        test_file = read_text_file(study_path + file)
        if first_call:
            messages.append({"role": "user", "content": f"{command} {test_file}"})
            first_call = False
        else:
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
        save_txt(gen_output, f"{output_path}{model_name}_{file_name}_{n_shot}_shot.txt")

    cleanup()


world_size = int(os.environ["WORLD_SIZE"])
rank = int(os.environ["RANK"])
function_main(rank, world_size)