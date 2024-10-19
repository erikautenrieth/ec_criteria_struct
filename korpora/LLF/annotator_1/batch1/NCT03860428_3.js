'INC'

'-  Age less than 72 hours'

'-  age() eq(op(LT), val("72"), temporal_unit(HOUR))'

age()
    .num_filter(
        eq(op(LT), val("72"), temporal_unit(HOUR))
    )