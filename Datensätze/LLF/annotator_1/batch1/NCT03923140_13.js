'EXC'

'2.  Pregnant and lactating women'

'2.  cond("Pregnant") and cond("lactating") female()'

intersect(
    union(
        cond("Pregnant"), 
        cond("lactating")
    ),
    female()
)