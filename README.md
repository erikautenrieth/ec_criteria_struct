# Structuring Clinical Trial Eligibility Criteria with LLMs

Code repository for the master's thesis: [Applying Machine Learning Methods for Structuring Free-Text Data Using Clinical Trial Eligibility Criteria as an Example](docs/Masterthesis.pdf).

## Overview

This project investigates two approaches to structuring eligibility criteria (inclusion/exclusion) from clinical trials using Large Language Models:

1. **Indirect Structuring** — LLMs insert logical operators (`[AND]`, `[OR]`, `[NOT]`) into raw eligibility criteria text.
2. **Direct Structuring** — LLMs convert eligibility criteria directly into an AST (Abstract Syntax Tree) in JSON format.

Both approaches are evaluated on two corpora:
- **LCT** (Logical Clinical Trials) — used for both indirect and direct structuring
- **Chia** — used for indirect structuring only

### Example

**Input** (raw eligibility criteria):
```
Aged 18 above.
Having the ability to learn the standard toothbrushing method with AI powered toothbrush.
```

**Indirect output** (operators inserted):
```
Aged 18 [AND] above.
Having the ability to learn the standard toothbrushing method [AND] with AI powered toothbrush.
```

**Direct output** (AST / JSON):
```json
{"AND": {"left": {"raw_text": "Aged 18"}, "right": {"raw_text": "above."}}}
```

See the full example: [input](lct/parser/AST_Parser/example/example_criteria_output.txt) | [AST output](lct/parser/AST_Parser/example/example_ast_structure.json) | [visualization](lct/parser/AST_Parser/example/example_ast_image.png)

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
│   ├── models/                 # Inference & fine-tuning scripts
│   ├── evaluate/               # Evaluation pipelines
│   ├── parser/                 # Post-processing (AST parser, plotter, FHIR)
│   └── transform_lct/          # Corpus preprocessing
│
├── chia/                       # Chia corpus pipeline (indirect only)
│   ├── input/                  # Chia test data & prompts
│   ├── models/                 # Inference scripts
│   ├── evaluate/               # Evaluation on full Chia corpus
│   └── transform_chia/         # Chia .ann/.txt preprocessing
│
├── data/korpora/               # Public EC corpora (Chia, LCT, FRD, COVID19, LLF)
├── plots/                      # Figures & evaluation notebooks for thesis
├── docs/                       # Thesis PDF
└── .env.example                # API key template
```

Each subfolder has its own README with details — see links below.

### Key Entry Points

| Task | Location |
|------|----------|
| Run indirect structuring (LCT) | [`lct/models/models_txt/`](lct/models/models_txt/) |
| Run direct structuring (LCT) | [`lct/models/models_json/`](lct/models/models_json/) |
| Fine-tune Llama 3 | [`lct/models/fine_tuning/`](lct/models/fine_tuning/) |
| Evaluate indirect results | [`lct/evaluate/evaluate_txt/evaluate_txt_output.ipynb`](lct/evaluate/evaluate_txt/evaluate_txt_output.ipynb) |
| Evaluate direct results | [`lct/evaluate/evaluate_json/eval_json_output.ipynb`](lct/evaluate/evaluate_json/eval_json_output.ipynb) |
| Preprocess LCT corpus | [`lct/transform_lct/`](lct/transform_lct/) |
| Parse text → AST | [`lct/parser/AST_Parser/ast_parser.ipynb`](lct/parser/AST_Parser/ast_parser.ipynb) |
| Visualize AST trees | [`lct/parser/AST_Plotter/ast_plot.ipynb`](lct/parser/AST_Plotter/ast_plot.ipynb) |
| Prompt templates | [`lct/input/prompt/`](lct/input/prompt/) |

### Prompts

- **Indirect structuring:** [`lct/input/prompt/p1.txt`](lct/input/prompt/p1.txt) — rules for inserting `[AND]`/`[OR]`/`[NOT]`
- **Direct structuring (with entities):** [`lct/input/prompt/all_entitys_prompt1.txt`](lct/input/prompt/all_entitys_prompt1.txt) — AST + entity extraction rules

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

Results are generated in the evaluation notebooks:
- [`lct/evaluate/evaluate_txt/evaluate_txt_output.ipynb`](lct/evaluate/evaluate_txt/evaluate_txt_output.ipynb)
- [`lct/evaluate/evaluate_json/eval_json_output.ipynb`](lct/evaluate/evaluate_json/eval_json_output.ipynb)

## License

See [LICENSE](LICENSE).
