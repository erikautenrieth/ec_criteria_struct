'EXC'

'-  Pregnant , parturient or breastfeeding woman'

'-  cond("Pregnant") , cond("parturient") or cond("breastfeeding") female()'

intersect(
    union(  
        cond("Pregnant"),
        cond("parturient"),
        cond("breastfeeding")
    ),
    female()
)
