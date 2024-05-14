#!/bin/bash
#SBATCH --partition=gpu4          # GPU partition
#SBATCH --nodes=1                # number of nodes
#SBATCH --mem=120G                # memory per node in MB (different units with suffix K|M|G|T)
#SBATCH --gres=gpu:4 
#SBATCH --time=03:00:00          # Time limit hrs:min:sec

#SBATCH --output=llms_pipeline.%j.out   # Standard output and error log
#SBATCH --error=llms_pipeline.%j.err    # Error log
#SBATCH --job-name=llm_pipeline

module load cuda
python llama3_8b_n_shot.py


