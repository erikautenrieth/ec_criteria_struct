#!/bin/bash
#SBATCH --partition=gpu4         # GPU partition
#SBATCH --nodes=1                # number of nodes
#SBATCH --mem=260G               # memory per node in MB (different units with suffix K|M|G|T) 260-70B, 160-8B
#SBATCH --gres=gpu:4 
#SBATCH --time=05:00:00             # Time limit hrs:min:sec
#SBATCH --output=log/tuned.%j.out   # Standard output and error log
#SBATCH --error=log/tuned.%j.err    # Error log
#SBATCH --job-name=tuned_70b           # Job name

module load cuda

python 8b_tuned.py     # 8b_tuned.py  
