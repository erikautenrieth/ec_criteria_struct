## HPC Cluster

sinfo

squeue

sacct

srun --pty --partition=any --nodes=1 --ntasks-per-node=1 --mem=4G --time=2:00:00 /bin/bash

srun --pty --partition=gpu --gres=gpu:1 --nodes=1 --ntasks-per-node=1 --mem=4G --time=2:00:00 /bin/bash

srun --pty --partition=bigmem --nodes=1 --ntasks-per-node=1 --mem=750G --time=2:00:00 /bin/bash

module load gcc openmpi

## To wr14

ssh -Y wr14



sbatch jobscript.sh

git config --global user.email "e-aut@web.de"
git config --global user.name "erikautenrieth"