'INC'

'-  18 - 75 years old'

'-  eq(val("18"), op(BETWEEN), val("75"), temporal_unit(YEAR)) age()'

age()
    .num_filter(
        eq(val("18"), op(BETWEEN), val("75"), temporal_unit(YEAR))
    )