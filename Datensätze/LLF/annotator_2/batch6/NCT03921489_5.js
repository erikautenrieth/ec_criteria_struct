'EXC'

'-  Patient < 18 years of age'

'-  Patient eq(op(LT), val("18"), temporal_unit(YEAR)) of age()'

age()
    .num_filter(
        eq(op(LT), val("18"), temporal_unit(YEAR))
    )