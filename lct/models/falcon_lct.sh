#!/bin/bash
#SBATCH --partition=gpu4         # GPU partition
#SBATCH --nodes=2                # number of nodes
#SBATCH --mem=400G               # total memory for job
#SBATCH --gres=gpu:4             # request 4 GPUs
#SBATCH --time=20:00:00          # Time limit hrs:min:sec
#SBATCH --output=falcon.%j.out   # Standard output and error log
#SBATCH --job-name=falcon

module load cuda
python llama_0_shot.py
