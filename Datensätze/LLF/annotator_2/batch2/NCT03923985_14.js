'EXC'

'-  Pregnant women or those with precocious menopause'

'-  cond("Pregnant") female() or those with cond("precocious menopause")'

intersect(
    female(),
    union(
        cond("Pregnant"),
        cond("precocious menopause")
    )
)