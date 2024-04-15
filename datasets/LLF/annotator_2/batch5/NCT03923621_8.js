'EXC'

'-  Under 16 years'

'-  eq(op(LT), val("16"), temporal_unit(YEAR))'

age()
    .num_filter(
        eq(op(LT), val("16"), temporal_unit(YEAR))
    )