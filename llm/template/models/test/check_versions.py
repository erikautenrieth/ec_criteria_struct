import torch
import tensorflow as tf

print("TensorFlow version:", tf.__version__)
print("Torch Version:", torch.__version__)
print("Torch Cuda Version ", torch.version.cuda)
print("Cuda available: ", torch.cuda.is_available())


device = torch.device("cuda")
print(torch.rand(10).to(device))