'INC'

'-  Aged 13 - 50 years'

'-  age() eq(val("13"), op(BETWEEN), val("50"), temporal_unit(YEAR))'

age()
    .num_filter(
        eq(val("13"), op(BETWEEN), val("50"), temporal_unit(YEAR))
    )