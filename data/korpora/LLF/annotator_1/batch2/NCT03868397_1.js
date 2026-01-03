'INC'

'-  older than 18 years'

'-  eq(op(GT), val("18"), temporal_unit(YEAR))'

age()
    .num_filter(
        eq(op(GT), val("18"), temporal_unit(YEAR))
    )