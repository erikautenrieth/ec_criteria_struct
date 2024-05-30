#!/bin/bash

#SBATCH --partition=gpu4         # GPU partition
#SBATCH --nodes=3                # number of nodes
#SBATCH --ntasks-per-node=4      # number of tasks per node
#SBATCH --gres=gpu:4             # request 4 GPUs per node
#SBATCH --mem=450G               # total memory for job
#SBATCH --time=00:40:00          # Time limit hrs:min:sec
#SBATCH --output=log/falcon.%j.out   # Standard output and error log
#SBATCH --error=log/falcon.%j.err    # Error log
#SBATCH --job-name=falcon

module load cuda

export PYTORCH_CUDA_ALLOC_CONF=expandable_segments:True

export TMPDIR=/tmp/$SLURM_JOB_ID
mkdir -p $TMPDIR

python falcon.py

