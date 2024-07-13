#!/bin/bash
#SBATCH --partition=gpu4         # GPU partition
#SBATCH --nodes=1                # number of nodes
#SBATCH --mem=260G               # memory per node in MB (different units with suffix K|M|G|T) 260-70B, 160-8B
#SBATCH --gres=gpu:4 
#SBATCH --time=40:00:00          # Time limit hrs:min:sec

#SBATCH --output=p1_8b_e30_r2048_linear.%j.out   # Standard output and error log
#SBATCH --error=p1_8b_e30_r2048_linear.%j.err    # Error log  p1_8b_e10_r2048.%j.err 
#SBATCH --job-name=tune8b

module load cuda
export CUDA_VISIBLE_DEVICES=0 

python finetune_llama3_p1_8b.py
#finetune_llama3_p1.py




  