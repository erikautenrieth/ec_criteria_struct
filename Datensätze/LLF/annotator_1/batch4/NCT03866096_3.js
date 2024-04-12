'INC'

'-  From 18 to 25 years'

'-  From eq(val("18"), op(BETWEEN), val("25"), temporal_unit(YEAR))'

age()
    .num_filter(
        eq(val("18"), op(BETWEEN), val("25"), temporal_unit(YEAR))
    )