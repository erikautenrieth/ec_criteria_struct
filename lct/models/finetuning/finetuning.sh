#!/bin/bash
#SBATCH --partition=gpu4         # GPU partition
#SBATCH --nodes=1                # number of nodes
#SBATCH --mem=260G               # memory per node in MB (different units with suffix K|M|G|T) 260-70B, 160-8B
#SBATCH --gres=gpu:4 
#SBATCH --time=15:00:00          # Time limit hrs:min:sec
#SBATCH --output=8b_e10_baseline.%j.out   # Standard output and error log
#SBATCH --error=8b_e10_baseline.%j.err    # Error log  p1_8b_e10_r2048.%j.err 
#SBATCH --job-name=tune_p1

module load cuda
export CUDA_VISIBLE_DEVICES=0 

python finetune_llama3_8b_p1_baseline.py # finetune_llama3_p1_70b.py





  ##SBATCH --nodelist=wr24          # Specify the node 20 (fail), 21, (geht) 22 (geht), 23 (geht), 24 (fail) ,25 (geht) !