# Fine-Tuning

Training data is located in [`../input/datasets/`](../../input/datasets/):
- `dataset_p2/` — Text files with inserted operators (indirect structuring)
- `dataset_p4_prompt1/`, `dataset_p4_prompt2/` — JSON files in AST structure (direct structuring)

## Usage

Each model has a corresponding Python script (e.g., `ft_llama3_70b_json.py`). To run:

1. Configure the script name in `finetuning.sh`
2. Set `HF_TOKEN` in your environment
3. Submit the batch job: `sbatch finetuning.sh`

**Note:** Fine-tuned model weights are not included (too large). Train them yourself using these scripts.
