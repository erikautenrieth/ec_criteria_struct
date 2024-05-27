#!/bin/bash
#SBATCH --partition=gpu4         # GPU partition
#SBATCH --nodes=1                # number of nodes
#SBATCH --mem=160G               # memory per node in MB (different units with suffix K|M|G|T) 260-70B, 
#SBATCH --gres=gpu:4 
#SBATCH --time=10:00:00          # Time limit hrs:min:sec

SCRIPT_NAME= "llama3_0_shot_lct.py"   # "llama3_4_shot_lct"

#SBATCH --output=log/${SCRIPT_NAME}.%j.out   # Standard output and error log
#SBATCH --error=log/${SCRIPT_NAME}.%j.err    # Error log
#SBATCH --job-name=${SCRIPT_NAME}

module load cuda
python ${SCRIPT_NAME}.py


