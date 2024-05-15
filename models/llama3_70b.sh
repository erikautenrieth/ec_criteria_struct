#!/bin/bash
#SBATCH --partition=gpu4          # GPU partition
#SBATCH --nodes=1                # number of nodes
#SBATCH --mem=250G                # memory per node in MB (different units with suffix K|M|G|T)
#SBATCH --gres=gpu:4 
#SBATCH --time=30:00:00          # Time limit hrs:min:sec

#SBATCH --output=log/llama3_70b_inst_7_shot.%j.out   # Standard output and error log
#SBATCH --error=log/llama3_70b_inst_7_shot.%j.err    # Error log
#SBATCH --job-name=llama3_70b_inst_7_shot

module load cuda
python llama3_70b_n_shot.py


