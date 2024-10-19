'INC'

'-  Must be at least 18 years of age'

'-  Must be eq(op(GTEQ), val("18"), temporal_unit(YEAR)) of age()'

age()
    .num_filter(
        eq(op(GTEQ), val("18"), temporal_unit(YEAR))
    )