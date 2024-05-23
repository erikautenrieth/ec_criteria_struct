#!/bin/bash
#SBATCH --partition=gpu4          # GPU partition
#SBATCH --nodes=1                # number of nodes
#SBATCH --mem=200G                # memory per node in MB (different units with suffix K|M|G|T)
#SBATCH --gres=gpu:4 
#SBATCH --time=3:00:00          # Time limit hrs:min:sec

#SBATCH --output=llama3_8b_0_shot.%j.out   # Standard output and error log
#SBATCH --error=llama3_8b_0_shot.%j.err    # Error log
#SBATCH --job-name=llama3_8b_0_shot

module load cuda
cd ..
python llama3_8b_0_shot_p2.py


