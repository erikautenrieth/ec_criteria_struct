#!/bin/bash
#SBATCH --partition=gpu4         # GPU partition
#SBATCH --nodes=1                # number of nodes
#SBATCH --mem=260G               # memory per node in MB (different units with suffix K|M|G|T) 260-70B, 160-8B
#SBATCH --gres=gpu:4 
#SBATCH --time=10:00:00          # Time limit hrs:min:sec

#SBATCH --output=log/llama_p4.%j.out   # Standard output and error log
#SBATCH --error=log/llama_p4.%j.err    # Error log
#SBATCH --job-name=llama_struct

module load cuda
python llama3_tuned_p4.py




