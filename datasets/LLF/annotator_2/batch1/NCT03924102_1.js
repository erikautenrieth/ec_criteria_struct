'INC'

'-  At least 18 years of age .'

'-  eq(op(GTEQ), val("18"), temporal_unit(YEAR)) of age() .'

age()
    .num_filter(
        eq(op(GTEQ), val("18"), temporal_unit(YEAR))
    )