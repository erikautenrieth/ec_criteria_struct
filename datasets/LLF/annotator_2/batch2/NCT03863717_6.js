'EXC'

'-  Age < 18 years old'

'-  age() eq(op(LT), val("18"), temporal_unit(YEAR)) old'

age()
    .num_filter(
        eq(op(LT), val("18"), temporal_unit(YEAR))
    )