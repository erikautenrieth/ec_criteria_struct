'INC'

'-  age 14 - 19 years'

'-  age() eq(val("14"), op(BETWEEN), val("19"), temporal_unit(YEAR))'

age()
    .num_filter(
        eq(val("14"), op(BETWEEN), val("19"), temporal_unit(YEAR))
    )