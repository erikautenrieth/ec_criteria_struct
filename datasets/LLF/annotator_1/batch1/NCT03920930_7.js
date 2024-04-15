'EXC'

'-  patients < 18 years'

'-  patients eq(op(LT), val("18"), temporal_unit(YEAR))'

age()
    .num_filter(
        eq(op(LT), val("18"), temporal_unit(YEAR))
    )