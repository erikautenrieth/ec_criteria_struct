#!/bin/bash
#SBATCH --partition=gpu4         # GPU partition
#SBATCH --nodes=1                # number of nodes
#SBATCH --mem=260G               # memory per node in MB (different units with suffix K|M|G|T) 260-70B, 160-8B
#SBATCH --gres=gpu:4 
#SBATCH --time=5:00:00          # Time limit hrs:min:sec

#SBATCH --output=log/llama_p3.%j.out   # Standard output and error log
#SBATCH --error=log/llama_p3.%j.err    # Error log
#SBATCH --job-name=llama_p3

module load cuda
python llama_p3_tuned.py

# llama_p3_tuned.py


