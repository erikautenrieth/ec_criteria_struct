'INC'

'-  Age > 18 years .'

'-  age() eq(op(GT), val("18"), temporal_unit(YEAR)) .'

age()
    .num_filter(
        eq(op(GT), val("18"), temporal_unit(YEAR))
    )
