'INC'

'-  Age ≥ 18 years old; AND'

'-  age() eq(op(GTEQ), val("18"), temporal_unit(YEAR)) old; AND'

age()
    .num_filter(
        eq(op(GTEQ), val("18"), temporal_unit(YEAR))
    )