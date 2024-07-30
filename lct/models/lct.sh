#!/bin/bash
#SBATCH --partition=gpu4         # GPU partition
#SBATCH --nodes=2                # number of nodes
#SBATCH --gpus-per-node=4
#SBATCH --ntasks-per-node=4          # number of tasks per node
#SBATCH --mem=260G               # memory per node in MB (different units with suffix K|M|G|T) 260-70B, 160-8B
#SBATCH --gres=gpu:4 
#SBATCH --time=10:00:00             # Time limit hrs:min:sec
#SBATCH --output=log/llama.%j.out   # Standard output and error log
#SBATCH --error=log/llama.%j.err    # Error log
#SBATCH --job-name=llama            # Job name

module load cuda

export MASTER_PORT=12355
export MASTER_ADDR=$(scontrol show hostnames $SLURM_JOB_NODELIST | head -n 1)

python llama3_1.py





