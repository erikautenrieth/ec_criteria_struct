#!/bin/bash
#SBATCH --partition=gpu4         # GPU partition
#SBATCH --nodes=2                # number of nodes
#SBATCH --mem=260G               # memory per node in MB (different units with suffix K|M|G|T) 260-70B, 160-8B
#SBATCH --gres=gpu:4 
#SBATCH --time=10:00:00             # Time limit hrs:min:sec
#SBATCH --output=log/405b.%j.out   # Standard output and error log
#SBATCH --error=log/405b.%j.err    # Error log
#SBATCH --job-name=405b            # Job name

module load cuda

export PYTORCH_CUDA_ALLOC_CONF=expandable_segments:True
export MASTER_ADDR=$(hostname)
export MASTER_PORT=12355

python -c "import torch; torch.cuda.empty_cache()"

python 405.py

nvidia-smi

#llama3_1.py

#flan.py

##SBATCH --nodelist=wr21          # Specify the node 20 (fail), 21, (geht) 22 (geht), 23 (geht)!, 24 (fail) ,25 (geht) !
#echo "Running nvidia-smi diagnostics"
#nvidia-smi -q -d MEMORY 
#nvidia-smi -q -d UTILIZATION 
#nvidia-smi -q -d ECC 
#export SLURM_DEBUG=nvml