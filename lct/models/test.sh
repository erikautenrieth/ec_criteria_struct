#!/bin/bash
#SBATCH --partition=any          # partition / wait queue
#SBATCH --nodes=4                # number of nodes
#SBATCH --ntasks-per-node=32     # number of tasks per node
#SBATCH --mem=4G                 # memory per node in MB (different units with suffix K|M|G|T)
#SBATCH --time=2:00              # total runtime of job allocation (format D-HH:MM:SS; first parts optional)
#SBATCH --output=slurm.%j.out    # filename for STDOUT (%N: nodename, %j: job-ID)
#SBATCH --error=slurm.%j.err     # filename for STDERR

python test.py