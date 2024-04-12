'INC'

'-  over 65 years old'

'-  eq(op(GT), val("65"), temporal_unit(YEAR)) age()'

age()
    .num_filter(
        eq(op(GT), val("65"), temporal_unit(YEAR))
    )