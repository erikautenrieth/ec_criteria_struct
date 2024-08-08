#!/bin/bash
#SBATCH --partition=gpu4         # GPU partition
#SBATCH --nodes=1                # number of nodes
#SBATCH --mem=260G               # memory per node in MB (different units with suffix K|M|G|T) 260-70B, 160-8B
#SBATCH --gres=gpu:4 
#SBATCH --time=72:00:00          # Time limit hrs:min:sec
#SBATCH --output=70b_tunep4_const.%j.out   # Standard output and error log
#SBATCH --error=70b_tunep4_const.%j.err    # Error log  p1_8b_e10_r2048.%j.err 
#SBATCH --job-name=70b_tune

module load cuda
export CUDA_VISIBLE_DEVICES=0 

python finetune_llama3_70b_p4.py



  ##SBATCH --nodelist=wr24          # Specify the node 20 (fail), 21, (geht) 22 (geht), 23 (geht), 24 (fail) ,25 (geht) !