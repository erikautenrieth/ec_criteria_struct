'EXC'

'6.  Pregnant or breastfeeding women'

'6.  cond("Pregnant") or cond("breastfeeding") female()'

intersect(
    female(),
    union(
        cond("Pregnant"),
        cond("breastfeeding")
    )
)