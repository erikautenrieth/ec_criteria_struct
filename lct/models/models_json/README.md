# Model Inference — Direct Structuring

Converts eligibility criteria directly into an AST (JSON) structure.

## Open-Source Models (HPC Cluster)

Run Llama 3, Qwen 2 via their Python scripts using `lct_p4.sh`:
- Requires `HF_TOKEN` environment variable
- Adjust input/output paths in the script

## Fine-Tuned Models

Run via `ft_llama3_8b.py` / `ft_llama3_70b.py`:
- **Important:** Requires `transformers==4.38.0` for inference
- Models must be trained first (see [`../fine_tuning/`](../fine_tuning/))

## Closed-Source Models (API)

- `gpt_4o.py` — Requires `OPENAI_API_KEY`
