# LCT Corpus

Pipeline for structuring eligibility criteria from the LCT (Logical Clinical Trials) corpus.

- [`input/`](input/) — Datasets, prompts, and train/test splits
- [`models/`](models/) — Inference scripts and fine-tuning (open-source LLMs on HPC cluster, closed-source via API)
- [`evaluate/`](evaluate/) — Model output evaluation (operator-level and AST-level metrics)
- [`parser/`](parser/) — AST parsers and visualization tools
- [`transform_lct/`](transform_lct/) — Corpus preprocessing (annotation → structured data)
