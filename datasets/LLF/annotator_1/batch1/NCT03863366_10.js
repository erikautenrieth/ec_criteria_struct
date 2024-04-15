'EXC'

'-  Current pregnancy or breastfeeding'

'-  eq(temporal_per(PRESENT)) cond("pregnancy") or cond("breastfeeding")'

union(
    cond("pregnancy"),
    cond("breastfeeding")
)
.temporality(
    eq(temporal_per(PRESENT))
)