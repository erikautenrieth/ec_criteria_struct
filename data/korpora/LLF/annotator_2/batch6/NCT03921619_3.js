'EXC'

'-  Younger than 65 years of age'

'-  eq(op(LT), val("65"), temporal_unit(YEAR)) of age()'

age()
    .num_filter(
        eq(op(LT), val("65"), temporal_unit(YEAR))
    )