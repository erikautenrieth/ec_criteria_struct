'INC'

'-  minimum disease duration of 5 years'

'-  minimum cond() duration of eq(op(GTEQ), val("5"), temporal_unit(YEAR))'

cond()
    .duration(
        eq(op(GTEQ), val("5"), temporal_unit(YEAR))
    )