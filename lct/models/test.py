import torch

print("CUDA available:", torch.cuda.is_available())
if torch.cuda.is_available():
    print("CUDA device count:", torch.cuda.device_count())
    print("CUDA current device:", torch.cuda.current_device())
    print("CUDA device name:", torch.cuda.get_device_name(torch.cuda.current_device()))


import pynvml

pynvml.nvmlInit()
device_count = pynvml.nvmlDeviceGetCount()
for i in range(device_count):
    handle = pynvml.nvmlDeviceGetHandleByIndex(i)
    print(f"Device {i}: {pynvml.nvmlDeviceGetName(handle)}")
    print(f"  Memory: {pynvml.nvmlDeviceGetMemoryInfo(handle)}")
pynvml.nvmlShutdown()
