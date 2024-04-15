'INC'

'-  Aged 5 - 12 years'

'-  age() eq(val("5"), op(BETWEEN), val("12"), temporal_unit(YEAR))'

age()
    .num_filter(
        eq(val("5"), op(BETWEEN), val("12"), temporal_unit(YEAR))
    )