# Structuring Clinical Trial Eligibility Criteria with LLMs

Code repository for the master's thesis: [Applying Machine Learning Methods for Structuring Free-Text Data Using Clinical Trial Eligibility Criteria as an Example](docs/Masterthesis.pdf).

## Overview

This project investigates two approaches to structuring eligibility criteria (inclusion/exclusion) from clinical trials using Large Language Models:

1. **Indirect Structuring** — LLMs insert logical operators (`[AND]`, `[OR]`, `[NOT]`) into raw eligibility criteria text.
2. **Direct Structuring** — LLMs convert eligibility criteria directly into an AST (Abstract Syntax Tree) in JSON format.

Both approaches are evaluated on two corpora:
- **LCT** (Logical Clinical Trials) — used for both indirect and direct structuring
- **Chia** — used for indirect structuring only

### Models

| Model | Method |
|-------|--------|
| Llama 3 (8B/70B) | Zero-shot, few-shot, fine-tuned (LoRA) |
| GPT-4o | Zero-shot, few-shot |
| Qwen 2 (72B) | Zero-shot, few-shot |
| Gemma 2 (27B) | Zero-shot, few-shot |
| Claude 3.5 Sonnet | Few-shot |

## Repository Structure

```
├── lct/                        # LCT corpus pipeline (indirect + direct)
│   ├── input/                  # Datasets, prompts, train/test splits
│   │   ├── datasets/           # Train/test splits per prompt variant
│   │   ├── prompt/             # Prompt templates (P1–P9, Claude, entity prompts)
│   │   └── lct_p*/             # Annotated ground-truth data
│   ├── models/                 # Inference & fine-tuning scripts
│   │   ├── fine_tuning/        # LoRA fine-tuning (Llama 3 8B/70B)
│   │   ├── models_txt/         # Indirect structuring (text output)
│   │   └── models_json/        # Direct structuring (JSON/AST output)
│   ├── evaluate/               # Evaluation pipelines
│   │   ├── evaluate_txt/       # Operator-level precision/recall/F1
│   │   └── evaluate_json/      # AST structure & entity evaluation
│   ├── parser/                 # Post-processing tools
│   │   ├── AST_Parser/         # Text → AST conversion (Node.py)
│   │   ├── AST_Plotter/        # Visualize AST trees
│   │   ├── JSON_Parser/        # Merge inc/exc criteria into single tree
│   │   └── Fhir_Parser/        # (Planned) AST → FHIR conversion
│   └── transform_lct/          # Corpus preprocessing & annotation parsing
│
├── chia/                       # Chia corpus pipeline (indirect only)
│   ├── input/                  # Chia test data & prompts
│   ├── models/                 # Inference scripts (Llama 3, fine-tuned)
│   ├── evaluate/               # Evaluation on full Chia corpus
│   └── transform_chia/         # Chia .ann/.txt preprocessing
│
├── data/                       # Reference corpora
│   └── korpora/                # Public EC corpora (Chia, LCT, FRD, COVID19, LLF)
│
├── plots/                      # Figures & evaluation notebooks for thesis
│   ├── code/                   # Shared utility scripts (Node, JSON parser)
│   ├── ast/                    # AST visualization examples
│   ├── ergebnisse/             # Result plots (txt & JSON output)
│   ├── entity_eval/            # Entity extraction evaluation
│   ├── auswertungen/           # LaTeX table generation
│   └── grundlagen/             # Background & methodology figures
│
├── docs/                       # Thesis PDF
└── .env.example                # API key template (OpenAI, HuggingFace)
```

## Setup

```bash
# Clone
git clone https://github.com/<user>/ec_criteria_struct.git
cd ec_criteria_struct

# Environment variables
cp .env.example .env
# Set OPENAI_API_KEY, ANTHROPIC_API_KEY, and HF_TOKEN in .env

# Dependencies
pip install -r requirements.txt
```

**Note:** Fine-tuning and open-source model inference require a GPU cluster with CUDA support. Fine-tuned model weights are not included — train them using the scripts in [`lct/models/fine_tuning/`](lct/models/fine_tuning/).

## Evaluation Metrics

- **Indirect (text):** Operator-level precision, recall, F1 — compares predicted `[AND]`/`[OR]`/`[NOT]` positions against ground truth.
- **Direct (JSON):** Structural similarity of AST trees + entity extraction accuracy (per-category F1).

## License

See [LICENSE](LICENSE).
