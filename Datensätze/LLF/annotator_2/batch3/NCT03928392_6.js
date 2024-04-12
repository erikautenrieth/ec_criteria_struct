'EXC'

'-  Younger than 18 years of age or older than 95 years of age'

'-  eq(op(LT), val("18"), temporal_unit(YEAR)) of age() or eq(op(GTEQ), val("95"), temporal_unit(YEAR)) of age()'

age()
    .num_filter(
        or(
            eq(op(LT), val("18"), temporal_unit(YEAR)),
            eq(op(GTEQ), val("95"), temporal_unit(YEAR))
        )
    )