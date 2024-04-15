'EXC'

'-  use of systemic antibiotics or anti - mycotic drugs during 4 weeks before study entry;'

'-  use of mod("systemic") drug("antibiotics") or anti - cond("mycotic") drug() during eq(val("4"), temporal_unit(WEEK)) before study entry;'

union(
    drug("antibiotics")
        .mod("systemic"),
    drug()
        .for(
            cond("mycotic")
        )
)
.temporality(
    eq(val("4"), temporal_unit(WEEK))
)
