'INC'

'-  Over 18 years old .'

'-  eq(op(GT), val("18"), temporal_unit(YEAR)) age() .'

age()
    .num_filter(
        eq(op(GT), val("18"), temporal_unit(YEAR))
    )