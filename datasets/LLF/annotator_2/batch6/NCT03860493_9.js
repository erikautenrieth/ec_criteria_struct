'EXC'

'3.  Women who are pregnant or breastfeeding , or for whom possibility of pregnancy was not ruled out'

'3.  female() who are cond("pregnant") or cond("breastfeeding") , or for whom possible() of cond("pregnancy") was not ruled out'

intersect(
    female(),
    union(
        cond("pregnant"),
        cond("breastfeeding"),
        cond("pregnancy")
            .possible()
    )
)