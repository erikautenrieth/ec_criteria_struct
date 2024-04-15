'INC'

'-  Maternal age ≥ 18 yrs'

'-  mother() age() eq(op(GTEQ), val("18"), temporal_unit(YEAR))'

intersect(
    mother(),
    age()
        .num_filter(
            eq(op(GTEQ), val("18"), temporal_unit(YEAR))
        )
)

