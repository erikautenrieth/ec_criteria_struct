'EXC'

'-  MEM or amantadine for patients'

'-  cond("MEM") or drug("amantadine") for patients'

union(
    cond("MEM"),
    drug("amantadine")
)