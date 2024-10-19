'EXC'

'-  pregnant and nursing women or'

'-  cond("pregnant") and cond("nursing") female() or'

intersect(
    union(
        cond("pregnant"),
        cond("nursing")
    ),
    female()
)
