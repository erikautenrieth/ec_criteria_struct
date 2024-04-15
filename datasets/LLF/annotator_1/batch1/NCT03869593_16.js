'EXC'

'-  Pregnant or lactating woman'

'-  cond("Pregnant") or cond("lactating") female()'

intersect(
    union(
        cond("Pregnant"), 
        cond("lactating")
    ),
    female()    
)