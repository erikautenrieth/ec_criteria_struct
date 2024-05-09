#!/bin/bash
#SBATCH --partition=gpu          # GPU partition
#SBATCH --nodes=1                # number of nodes
#SBATCH --time=00:04:00          # Time limit hrs:min:sec

#SBATCH --output=llms_pipeline.%j.out   # Standard output and error log
#SBATCH --error=llms_pipeline.%j.err    # Error log

module load cuda
python llama3_8b.py


