'EXC'

'-  The participant is younger than 18 years old .'

'-  The participant is eq(op(LT), val("18"), temporal_unit(YEAR)) age() .'

age()
    .num_filter(
        eq(op(LT), val("18"), temporal_unit(YEAR))
    )