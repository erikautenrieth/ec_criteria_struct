#!/bin/bash
#SBATCH --partition=gpu4         # GPU partition
#SBATCH --nodes=1                # number of nodes
#SBATCH --mem=260G               # memory per node in MB (different units with suffix K|M|G|T) 260-70B, 160-8B
#SBATCH --gres=gpu:4 
#SBATCH --time=00:10:00          # Time limit hrs:min:sec

#SBATCH --output=full_tune.%j.out   # Standard output and error log
#SBATCH --error=full_tune..%j.err    # Error log
#SBATCH --job-name=full_tune

module load cuda
python finetune_all_gpus_p1.py

  