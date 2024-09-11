#!/bin/bash
#SBATCH --partition=gpu4         # GPU partition
#SBATCH --nodes=1                # number of nodes
#SBATCH --mem=260G               # memory per node in MB (different units with suffix K|M|G|T) 260-70B, 160-8B
#SBATCH --gres=gpu:4 
#SBATCH --time=24:00:00             # Time limit hrs:min:sec
#SBATCH --output=log/5_shot_reflect.%j.out   # Standard output and error log
#SBATCH --error=log/5_shot_reflect.%j.err    # Error log
#SBATCH --job-name=5_shot            # Job name

module load cuda

python llama3_1_reflection_0_shot.py





