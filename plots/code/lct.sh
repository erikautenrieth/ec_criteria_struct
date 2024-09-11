#!/bin/bash
#SBATCH --partition=gpu4             # GPU partition
#SBATCH --nodes=1                    # number of nodes
#SBATCH --mem=260G                   # memory per node
#SBATCH --gres=gpu:4 
#SBATCH --time=04:00:00              # Time limit hrs:min:sec
#SBATCH --output=log/job_name.%j.out # Standard output and error log
#SBATCH --error=log/job_name.%j.err  # Error log
#SBATCH --job-name=job_name

module load cuda
python llama3_zero_shot.py





