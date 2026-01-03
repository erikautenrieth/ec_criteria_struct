'INC'

'-  30 - 60 years'

'-  eq(val("30"), op(BETWEEN), val("60"), temporal_unit(YEAR))'

age()
    .num_filter(
        eq(val("30"), op(BETWEEN), val("60"), temporal_unit(YEAR))
    )