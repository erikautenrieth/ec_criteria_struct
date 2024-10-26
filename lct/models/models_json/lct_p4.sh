#!/bin/bash
#SBATCH --partition=gpu4         # GPU partition
#SBATCH --nodes=1                # number of nodes
#SBATCH --mem=260G               # memory per node in MB (different units with suffix K|M|G|T) 260-70B, 160-8B
#SBATCH --gres=gpu:4 
#SBATCH --time=72:00:00          # Time limit hrs:min:sec

#SBATCH --output=log/time_p4_70b_Tune.%j.out   # Standard output and error log
#SBATCH --error=log/time_p4_70b_Tune.%j.err    # Error log
#SBATCH --job-name=70b_tuned

module load cuda
python tuned_iter.py 




