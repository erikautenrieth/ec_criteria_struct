'EXC'

'-  age under 18 years'

'-  age() eq(op(LT), val("18"), temporal_unit(YEAR))'

age()
    .num_filter(
        eq(op(LT), val("18"), temporal_unit(YEAR))
    )