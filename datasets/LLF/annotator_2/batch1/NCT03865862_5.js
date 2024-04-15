'EXC'

'-  Present a medical diagnosis of injury or illness'

'-  Present a medical diagnosis of obs("injury") or cond("illness")'

union(
    obs("injury"),
    cond("illness")
)