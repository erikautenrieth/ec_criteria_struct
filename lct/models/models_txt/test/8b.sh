#!/bin/bash
#SBATCH --partition=gpu4         # GPU partition
#SBATCH --nodes=1                # number of nodes
#SBATCH --gres=gpu:4 
#SBATCH --time=06:00:00          # Time limit hrs:min:sec
#SBATCH --nodelist=wr14          # Specify the node 20 (fail), 21, (geht) 22 (geht), 23 (geht)!, 24 (fail) ,25 (geht) !
#SBATCH --output=log/8b_0shot.%j.out   # Standard output and error log
#SBATCH --error=log/8b_0shot.%j.err    # Error log
#SBATCH --job-name=8b

module load cuda
nvidia-smi

python llama8b_0_shot.py
