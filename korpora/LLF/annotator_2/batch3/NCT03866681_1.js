'INC'

'-  age 18 - 70 years'

'-  age() eq(val("18"), op(BETWEEN), val("70"), temporal_unit(YEAR))'

age()
    .num_filter(
        eq(val("18"), op(BETWEEN), val("70"), temporal_unit(YEAR))
    )