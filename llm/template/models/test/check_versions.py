import torch
import tensorflow as tf
import os
os.environ['CUDA_LAUNCH_BLOCKING'] = '1'
os.environ['TORCH_USE_CUDA_DSA'] = '1'


print("TensorFlow version:", tf.__version__)
print("Torch Version:", torch.__version__)
print("Torch Cuda Version ", torch.version.cuda)
print("Cuda available: ", torch.cuda.is_available())


import site
print(site.USER_SITE)

print(torch.Tensor([1,2]).cuda())

device = torch.device("cuda")
print(torch.rand(10).to(device))

