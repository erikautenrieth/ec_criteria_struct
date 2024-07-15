#!/bin/bash
#SBATCH --partition=gpu4         # GPU partition
#SBATCH --nodes=1                # number of nodes
#SBATCH --mem=260G               # memory per node in MB (different units with suffix K|M|G|T) 260-70B, 160-8B
#SBATCH --gres=gpu:4 
#SBATCH --time=3:00:00          # Time limit hrs:min:sec
#SBATCH --nodelist=wr25          # Specify the node 20 (fail), 21, (geht) 22 (geht), 23 (geht)!, 24 (fail) ,25 (geht) !
#SBATCH --output=log/llm_shot.%j.out   # Standard output and error log
#SBATCH --error=log/llm_shot.%j.err    # Error log
#SBATCH --job-name=tune

module load cuda
nvidia-smi



python llama_p1_tuned.py
#llama_p1_tuned.pyllama_p1_eval_shot.py 


#echo "Running nvidia-smi diagnostics"
#nvidia-smi -q -d MEMORY 
#nvidia-smi -q -d UTILIZATION 
#nvidia-smi -q -d ECC 
#export SLURM_DEBUG=nvml