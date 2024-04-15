'EXC'

'-  Poorly controlled hypertension or diabetes'

'-  change() cond("hypertension") or cond("diabetes")'

union(
    cond("hypertension"),
    cond("diabetes")
)
.change()