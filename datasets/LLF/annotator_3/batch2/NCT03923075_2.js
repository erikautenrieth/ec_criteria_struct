'INC'

'-  age 4 - 12 years old'

'-  age() eq(val("4"), op(BETWEEN), val("12"), temporal_unit(YEAR)) old'

age()
    .num_filter(
        eq(val("4"), op(BETWEEN), val("12"), temporal_unit(YEAR))
    )