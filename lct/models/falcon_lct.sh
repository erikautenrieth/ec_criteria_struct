#!/bin/bash
#SBATCH --partition=gpu4         # GPU partition
#SBATCH --nodes=3                # number of nodes
#SBATCH --ntasks-per-node=4      # number of tasks per node
#SBATCH --gres=gpu:4             # request 4 GPUs per node
#SBATCH --mem=450G               # total memory for job 450
#SBATCH --time=15:00:00           # Time limit hrs:min:sec
#SBATCH --output=log/falcon.%j.out   # Standard output and error log
#SBATCH --error=log/falcon.%j.err    # Error log
#SBATCH --job-name=falcon

module load cuda
export PYTORCH_CUDA_ALLOC_CONF=expandable_segments:True

# Set environment variables for distributed training
export MASTER_ADDR=$(scontrol show hostname $SLURM_NODELIST | head -n 1)
export MASTER_PORT=12345
export WORLD_SIZE=$(($SLURM_NNODES * $SLURM_NTASKS_PER_NODE))
export NCCL_DEBUG=INFO  # Enable NCCL debugging info

# Ensure TMPDIR is writable
export TMPDIR=/tmp

python falcon_test.py