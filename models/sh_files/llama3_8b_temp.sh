#!/bin/bash
#SBATCH --partition=gpu4          # GPU partition
#SBATCH --nodes=1                # number of nodes
#SBATCH --mem=200G                # memory per node in MB (different units with suffix K|M|G|T)
#SBATCH --gres=gpu:4 
#SBATCH --time=3:00:00          # Time limit hrs:min:sec

#SBATCH --job-name=log/llama3_8b_inst_5_shot_temp_1

module load cuda
cd ..
python llama3_8b_5_shot_temp.py


