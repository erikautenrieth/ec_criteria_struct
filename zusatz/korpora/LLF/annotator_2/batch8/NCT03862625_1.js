'INC'

'-  the participant 6 to 15 years of age during inclusion'

'-  the participant eq(val("6"), op(BETWEEN), val("15"), temporal_unit(YEAR)) of age() during inclusion'

age()
    .num_filter(
        eq(val("6"), op(BETWEEN), val("15"), temporal_unit(YEAR))
    )