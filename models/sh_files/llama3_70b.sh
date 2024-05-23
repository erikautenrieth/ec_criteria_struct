#!/bin/bash
#SBATCH --partition=gpu4          # GPU partition
#SBATCH --nodes=1                  # number of nodes
#SBATCH --mem=260G                # memory per node in MB (different units with suffix K|M|G|T)
#SBATCH --gres=gpu:4 
#SBATCH --time=20:00:00          # Time limit hrs:min:sec

SHOT_VALUE=5

#SBATCH --output=llama3_70b_inst_${SHOT_VALUE}_shot.%j.out   # Standard output and error log
#SBATCH --error=llama3_70b_inst_${SHOT_VALUE}_shot.%j.err    # Error log
#SBATCH --job-name=llama3_70b_inst_${SHOT_VALUE}_shot

module load cuda
cd ..
python llama3_70b_5_shot.py


  