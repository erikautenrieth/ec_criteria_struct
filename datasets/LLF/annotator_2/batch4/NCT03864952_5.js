'EXC'

'-  to be under 18 years old'

'-  to be eq(op(LT), val("18"), temporal_unit(YEAR)) age()'

age()
    .num_filter(
        eq(op(LT), val("18"), temporal_unit(YEAR))
    )