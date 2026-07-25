# LCT Corpus Preprocessing

Transforms raw LCT annotation files into structured formats used for training and evaluation.

## Notebooks (run in order)

1. [`0_extract_operators.ipynb`](0_extract_operators.ipynb) — Extracts AND/OR/NOT operators from annotated LCT files
2. [`1_parse_p1.ipynb`](1_parse_p1.ipynb) — Parses enriched LCT data into JSON format
3. [`2_parse_p2.ipynb`](2_parse_p2.ipynb) — Converts P1 files into AST structure (JSON)
4. [`3_parse_p3.ipynb`](3_parse_p3.ipynb) — Adds entity annotations to AST structure

## Modules

- [`Node.py`](Node.py) — AST node class (binary tree with AND/OR/NOT operators)
- [`preprocessing_functions.py`](preprocessing_functions.py) — Helper functions for parsing `.ann` annotation files
- `lct_korpus/` — Output of each preprocessing stage
