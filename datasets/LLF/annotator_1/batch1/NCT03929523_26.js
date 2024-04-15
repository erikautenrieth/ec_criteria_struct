'EXC'

'-  Pregnant or lactating women'

'-  cond("Pregnant") or cond("lactating") female()'

intersect(
    union(
        cond("Pregnant"), 
        cond("lactating")
    ),
    female()
)