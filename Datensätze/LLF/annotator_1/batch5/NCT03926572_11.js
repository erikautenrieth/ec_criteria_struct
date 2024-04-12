'EXC'

'-  Pregnant women , or breast feeding women'

'-  cond("Pregnant") female() , or cond("breast feeding") female()'

union(
    intersect(
        cond("Pregnant"),
        female()
    ),
    intersect(
        cond("breast feeding"),
        female()
    )
)
