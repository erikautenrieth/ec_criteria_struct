#!/bin/bash
#SBATCH --partition=gpu4         # GPU partition
#SBATCH --nodes=1                # number of nodes
#SBATCH --mem=260G               # memory per node in MB (different units with suffix K|M|G|T) 260-70B, 160-8B
#SBATCH --gres=gpu:4 
#SBATCH --time=05:00:00          # Time limit hrs:min:sec

#SBATCH --output=log/llm_shot.%j.out   # Standard output and error log
#SBATCH --error=log/llm_shot.%j.err    # Error log
#SBATCH --job-name=llm_k_shot

module load cuda
python llama_p1_eval_data.py
# llama_p1_0_shot.py # phi3_p1_0_shot.py  # gpt2_0_shot_p1.py # phi3_p1_0_shot.py  llama_p1.py
# llama_p1_0_shot_replace.py llama_autocriteria.py qwen_p1.py  llama_p1_tuned.py


