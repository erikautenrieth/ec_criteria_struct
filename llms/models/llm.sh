#!/bin/bash
#SBATCH --partition=gpu          # GPU partition
#SBATCH --nodes=1                # number of nodes
#SBATCH --mem=25G                # memory per node in MB (different units with suffix K|M|G|T)
#SBATCH --time=00:04:00          # Time limit hrs:min:sec

#SBATCH --output=llms_pipeline.%j.out   # Standard output and error log
#SBATCH --error=llms_pipeline.%j.err    # Error log

module load cuda
python llama3_8b.py


