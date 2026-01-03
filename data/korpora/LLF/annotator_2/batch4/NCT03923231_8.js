'INC'

'3.  Child or adolescent aged < 18 years'

'3.  child() or child() age() eq(op(LT), val("18"), temporal_unit(YEAR))'

union(
    child(),
    intersect(
        child(),
        age()
            .num_filter(
                eq(op(LT), val("18"), temporal_unit(YEAR))
            )
    )
)