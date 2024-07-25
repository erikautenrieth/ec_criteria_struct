#!/bin/bash
#SBATCH --partition=gpu4         # GPU partition
#SBATCH --nodes=1                # number of nodes
#SBATCH --mem=260G               # memory per node in MB (different units with suffix K|M|G|T) 260-70B, 160-8B
#SBATCH --gres=gpu:4 
#SBATCH --time=06:00:00             # Time limit hrs:min:sec
#SBATCH --output=log/3.1_5shot.%j.out   # Standard output and error log
#SBATCH --error=log/3.1_5shot.%j.err    # Error log
#SBATCH --job-name=3.1_5shot       # Job name

module load cuda

python llama3_n_shot.py

#llama3_1.py

#flan.py

##SBATCH --nodelist=wr21          # Specify the node 20 (fail), 21, (geht) 22 (geht), 23 (geht)!, 24 (fail) ,25 (geht) !
#echo "Running nvidia-smi diagnostics"
#nvidia-smi -q -d MEMORY 
#nvidia-smi -q -d UTILIZATION 
#nvidia-smi -q -d ECC 
#export SLURM_DEBUG=nvml