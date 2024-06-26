#!/bin/bash
#SBATCH --partition=gpu4         # GPU partition
#SBATCH --nodes=1                # number of nodes
#SBATCH --mem=260G               # memory per node in MB (different units with suffix K|M|G|T) 260-70B, 160-8B
#SBATCH --gres=gpu:4 
#SBATCH --time=16:00:00          # Time limit hrs:min:sec

#SBATCH --output=llm_tune_p3_20e_70B_prompt6.%j.out   # Standard output and error log
#SBATCH --error=llm_tune_p3_20e_70B_prompt6.%j.err    # Error log
#SBATCH --job-name=llm_tune

module load cuda
python finetune_llama3_p1.py
#llama_p1_0_shot.py # phi3_p1_0_shot.py  # gpt2_0_shot_p1.py # phi3_p1_0_shot.py  llama_p1.py
# llama_p1_0_shot_replace.py llama_autocriteria.py qwen_p1.py


  