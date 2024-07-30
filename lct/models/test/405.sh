#!/bin/bash
#SBATCH --partition=gpu4         # GPU partition
#SBATCH --nodes=2                # number of nodes
#SBATCH --gpus-per-node=4
#SBATCH --ntasks-per-node=4      # number of tasks per node
#SBATCH --mem=260G               # memory per node in MB
#SBATCH --time=10:00:00          # Time limit hrs:min:sec
#SBATCH --output=log/405b.%j.out # Standard output and error log
#SBATCH --error=log/405b.%j.err  # Error log
#SBATCH --job-name=405b          # Job name

# Diagnose-Ausgaben
echo "Job started at $(date)"
echo "Running on host: $(hostname)"
echo "Job ID: $SLURM_JOB_ID"
echo "Number of nodes: $SLURM_JOB_NUM_NODES"
echo "Number of tasks: $SLURM_NTASKS"
echo "GPUs per node: $SLURM_GPUS_PER_NODE"

# Lade notwendige Module
module load cuda
module list

# Setze Umgebungsvariablen
export MASTER_PORT=12355
export MASTER_ADDR=$(scontrol show hostnames $SLURM_JOB_NODELIST | head -n 1)

echo "MASTER_ADDR: $MASTER_ADDR"
echo "MASTER_PORT: $MASTER_PORT"
echo "CUDA_VISIBLE_DEVICES: $CUDA_VISIBLE_DEVICES"

# GPU-Diagnose
nvidia-smi

# Führe das Python-Skript aus
echo "Starting Python script"
python -m torch.distributed.run \
    --nproc_per_node=4 \
    --nnodes=2 \
    --node_rank=$SLURM_NODEID \
    --master_addr=$MASTER_ADDR \
    --master_port=$MASTER_PORT \
    /work/eauten2s/ec_criteria_struct/lct/models/405.py

echo "Job finished at $(date)"




##SBATCH --nodelist=wr21          # Specify the node 20 (fail), 21, (geht) 22 (geht), 23 (geht)!, 24 (fail) ,25 (geht) !
#echo "Running nvidia-smi diagnostics"
#nvidia-smi -q -d MEMORY 
#nvidia-smi -q -d UTILIZATION 
#nvidia-smi -q -d ECC 
#export SLURM_DEBUG=nvml