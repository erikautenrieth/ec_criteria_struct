'INC'

'-  60 - 89 years old'

'-  eq(val("60"), op(BETWEEN), val("89"), temporal_unit(YEAR)) age()'

age()
    .num_filter(
        eq(val("60"), op(BETWEEN), val("89"), temporal_unit(YEAR))
    )