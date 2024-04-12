'INC'

'-  at least 18 years old'

'-  eq(op(GTEQ), val("18"), temporal_unit(YEAR)) age()'

age()
    .num_filter(
        eq(op(GTEQ), val("18"), temporal_unit(YEAR))
    )