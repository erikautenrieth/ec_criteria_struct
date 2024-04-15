'EXC'

'-  Pregnant or breastfeeding women'

'-  cond("Pregnant") or cond("breastfeeding") female()'

intersect(
    union(
        cond("Pregnant"), 
        cond("breastfeeding")
    ),
    female()
)