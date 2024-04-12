'INC'

'-  age ≥ 18 and < 65 years'

'-  age() eq(op(GTEQ), val("18")) and eq(op(LT), val("65"), temporal_unit(YEAR))'

age()
    .num_filter(
        and(
            eq(op(GTEQ), val("18")),
            eq(op(LT), val("65"), temporal_unit(YEAR))
        )
    )