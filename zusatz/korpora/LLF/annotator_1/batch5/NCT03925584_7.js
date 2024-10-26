'EXC'

'-  Hemodynamically unstable or end of life'

'-  cond("Hemodynamically") change() or risk() death()'

union(
    cond("Hemodynamically")
        .change(),
    risk(
        death()
    )
)