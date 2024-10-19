'INC'

'-  The patient is at least 18 years old .'

'-  The patient is eq(op(GTEQ), val("18"), temporal_unit(YEAR)) age() .'

age()
    .num_filter(
        eq(op(GTEQ), val("18"), temporal_unit(YEAR))
    )