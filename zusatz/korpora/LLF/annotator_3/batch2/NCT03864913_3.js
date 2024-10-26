'INC'

'-  14 - 19 years old'

'-  eq(val("14"), op(BETWEEN), val("19"), temporal_unit(YEAR)) age()'

age()
    .num_filter(
        eq(val("14"), op(BETWEEN), val("19"), temporal_unit(YEAR))
    )