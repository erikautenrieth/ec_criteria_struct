'EXC'

'6.  Women pregnant or nursing .'

'6.  female() cond("pregnant") or cond("nursing") .'

intersect(
    female(),
    union(
        cond("pregnant"),
        cond("nursing")
    )
)
