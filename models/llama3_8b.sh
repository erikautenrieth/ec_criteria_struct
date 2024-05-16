#!/bin/bash
#SBATCH --partition=gpu4          # GPU partition
#SBATCH --nodes=1                # number of nodes
#SBATCH --mem=200G                # memory per node in MB (different units with suffix K|M|G|T)
#SBATCH --gres=gpu:4 
#SBATCH --time=20:00:00          # Time limit hrs:min:sec

#SBATCH --output=log/llama3_8b_inst_4_shot.%j.out   # Standard output and error log
#SBATCH --error=log/llama3_8b_inst_4_shot.%j.err    # Error log
#SBATCH --job-name=llama3_8b_inst_4_shot

module load cuda
python llama3_8b_4_shot_p2.py


