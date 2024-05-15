
## Bashrc

vim ~/.bashrc      Esc - :w 

export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/home/eautenrieth/.local/lib/python3.10/site-packages/tensorrt

## Pfade

export PYTHONPATH="${PYTHONPATH}:/home/eautenrieth/masterthesis/Masterthesis/llm"

## VM Ressourcen

df - h     // Disk speicher

## GPU

nvidia-smi

Driver Version: 450.203.02
GPU: T4-16C

Cuda Version:11.0
TensorFlow version: 2.16.1
Torch Version: 2.2.2+cu118


Alte Pytorch Versionen: https://pytorch.org/get-started/previous-versions/

pip install torch==1.7.1+cu110 torchvision==0.8.2+cu110 torchaudio==0.7.2 -f https://download.pytorch.org/whl/torch_stable.html

## W14
ssh -Y wr14

## Cache speicher

quota -s
df -h /tmp
df -h
tree ~/.cache

rm -rf /home/eauten2s/.cache/huggingface/hub/models--aaditya--OpenBioLLM-Llama3-70B

## HPC Cluster

sbatch

sinfo

squeue

sacct

scancel  Nummer

ssh -Y wr14
cd /work/eauten2s/ec_criteria_struct/llms/models/



# Hugging face authent