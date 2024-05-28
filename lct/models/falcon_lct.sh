#!/bin/bash
#SBATCH --partition=gpu4         # GPU partition
#SBATCH --nodes=2                # number of nodes
#SBATCH --ntasks-per-node=4      # number of tasks per node
#SBATCH --gres=gpu:4             # request 4 GPUs per node
#SBATCH --mem=400G               # total memory for job
#SBATCH --time=3:00:00          # Time limit hrs:min:sec
#SBATCH --output=log/falcon.%j.out   # Standard output and error log
#SBATCH --job-name=falcon

module load cuda
export MASTER_ADDR=$(scontrol show hostname $SLURM_NODELIST | head -n 1)
export MASTER_PORT=12345
export WORLD_SIZE=$(($SLURM_NNODES * $SLURM_NTASKS_PER_NODE))

srun --wait=300 --verbose python -m torch.distributed.launch \
    --nproc_per_node=4 \
    --nnodes=$SLURM_NNODES \
    --node_rank=$SLURM_PROCID \
    --master_addr=$MASTER_ADDR \
    --master_port=$MASTER_PORT \
    falcon.py