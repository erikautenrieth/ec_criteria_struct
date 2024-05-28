#!/bin/bash
#SBATCH --partition=gpu4         # GPU partition
#SBATCH --nodes=1                # number of nodes
#SBATCH --gres=gpu:4             # ask for a node with 4 GPUs
#SBATCH --time=02:00:00          # Time limit hrs:min:sec

#SBATCH --output=openbiollm_llama3_70b.%j.out   # Standard output and error log
#SBATCH --error=openbiollm_llama3_70b.%j.err    # Error log

python openbiollm_llama3_70b.py
