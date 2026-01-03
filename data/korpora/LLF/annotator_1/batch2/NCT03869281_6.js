'INC'

'-  age ≥ 18 years and < 65 years'

'-  age() eq(op(GTEQ), val("18"), temporal_unit(YEAR)) and eq(op(LT), val("65"), temporal_unit(YEAR))'

age()
    .num_filter(
        and(
            eq(op(GTEQ), val("18"), temporal_unit(YEAR)), 
            eq(op(LT), val("65"), temporal_unit(YEAR))
        )
    )