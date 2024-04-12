'EXC'

'-  > = 18 years'

'-  eq(op(GTEQ), val("18"), temporal_unit(YEAR))'

age()
    .num_filter(
        eq(op(GTEQ), val("18"), temporal_unit(YEAR))
    )