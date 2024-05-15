#!/bin/bash
#SBATCH --partition=gpu4          # GPU partition
#SBATCH --nodes=1                # number of nodes
#SBATCH --mem=250G                # memory per node in MB (different units with suffix K|M|G|T)
#SBATCH --gres=gpu:4 
#SBATCH --time=20:00:00          # Time limit hrs:min:sec

#SBATCH --output=log/llms_pipeline_70b_inst.%j.out   # Standard output and error log
#SBATCH --error=log/llms_pipeline_70b_inst.%j.err    # Error log
#SBATCH --job-name=llama3_70b_inst

module load cuda
python llama3_70b_n_shot.py


