'EXC'

'-  Pregnant or nursing females'

'-  cond("Pregnant") or cond("nursing") female()'

intersect(
    union(
        cond("Pregnant"),
        cond("nursing")
    ),
    female()
)

