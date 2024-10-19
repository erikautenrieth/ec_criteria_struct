'INC'

'-  Male , aged 18 years or older'

'-  male() , age() eq(val("18"), temporal_unit(YEAR), op(GTEQ))'

intersect(
    male(),
    age()
        .num_filter(
            eq(val("18"), temporal_unit(YEAR), op(GTEQ))
        )
)