#!/bin/bash
#SBATCH --partition=gpu4             # GPU partition
#SBATCH --nodes=1                    # Number of nodes
#SBATCH --mem=260G                   # Memory per node
#SBATCH --gres=gpu:4                 # Number of GPUs 
#SBATCH --time=04:00:00              # Time limit hrs:min:sec
#SBATCH --output=llama3_job.%j.out   # Standard log
#SBATCH --error=llama3_job.%j.err    # Error log
#SBATCH --job-name=llama3_zero_shot

# Lade das CUDA-Modul
module load cuda


MODEL_NAME="meta-llama/Meta-Llama-3-8B-Instruct"

python llama3_zero_shot.py --model "$MODEL_NAME"