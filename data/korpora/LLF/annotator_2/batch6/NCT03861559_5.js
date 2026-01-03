'EXC'

'-  Women who are pregnant or breastfeeding'

'-  female() who are cond("pregnant") or cond("breastfeeding")'

intersect(
    female(),
    union(
        cond("pregnant"),
        cond("breastfeeding")
    )
)