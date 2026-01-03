'INC'

'-  Adult 18 years old or older'

'-  adult() eq(val("18"), temporal_unit(YEAR), op(GTEQ))'

intersect(
    adult(),
    age()
        .num_filter(
            eq(val("18"), temporal_unit(YEAR), op(GTEQ))
        )
)