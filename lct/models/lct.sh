#!/bin/bash
#SBATCH --partition=gpu4         # GPU partition
#SBATCH --nodes=1                # number of nodes
#SBATCH --mem=160G               # memory per node in MB (different units with suffix K|M|G|T) 260-70B, 
#SBATCH --gres=gpu:4 
#SBATCH --time=10:00:00          # Time limit hrs:min:sec

SCRIPT_NAME="llama_0_shot"   

#SBATCH --output=${SCRIPT_NAME}.%j.out   # Standard output and error log
#SBATCH --job-name=${SCRIPT_NAME}

module load cuda
python llama_0_shot.py


