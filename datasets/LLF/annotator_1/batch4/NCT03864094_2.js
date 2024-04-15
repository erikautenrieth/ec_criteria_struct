'INC'

'-  Age 18 - 50 years'

'-  age() eq(val("18"), op(BETWEEN), val("50"), temporal_unit(YEAR))'

age()
    .num_filter(
        eq(val("18"), op(BETWEEN), val("50"), temporal_unit(YEAR))
    )