'INC'

'-  Children whose age ≥ 24 months and ≤ 36 months'

'-  child() whose age() eq(op(GTEQ), val("24"), temporal_unit(MONTH)) and eq(op(LTEQ), val("36"), temporal_unit(MONTH))'

intersect(
    child(),
    age()
        .num_filter(
            and(
                eq(op(GTEQ), val("24"), temporal_unit(MONTH)),
                eq(op(LTEQ), val("36"), temporal_unit(MONTH))
            )
        )
)
