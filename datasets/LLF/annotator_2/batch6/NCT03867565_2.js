'INC'

'-  Age ≥ 18 years old'

'-  age() eq(op(GTEQ), val("18"), temporal_unit(YEAR)) old'

age()
    .num_filter(
        eq(op(GTEQ), val("18"), temporal_unit(YEAR))
    )