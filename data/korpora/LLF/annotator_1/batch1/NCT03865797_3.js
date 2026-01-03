'INC'

'-  From 18 to 40 years old'

'-  eq(val("18"), op(BETWEEN), val("40"), temporal_unit(YEAR)) age()'

age()
    .num_filter(
        eq(val("18"), op(BETWEEN), val("40"), temporal_unit(YEAR))
    )