'EXC'

'-  < 18 years of age'

'-  eq(op(LT), val("18"), temporal_unit(YEAR)) of age()'

age()
    .num_filter(
        eq(op(LT), val("18"), temporal_unit(YEAR))
    )