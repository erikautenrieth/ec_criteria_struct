'EXC'

'-  Less than 18 years old'

'-  eq(op(LT), val("18"), temporal_unit(YEAR)) age()'

age()
    .num_filter(
        eq(op(LT), val("18"), temporal_unit(YEAR))
    )