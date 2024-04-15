'EXC'

'-  Single kidney due to trauma or donation'

'-  cond("Single kidney") due to obs("trauma") or obs("donation")'

union(
    obs("trauma"),
    obs("donation")
)
    .caused_by(
        cond("Single kidney")
    )