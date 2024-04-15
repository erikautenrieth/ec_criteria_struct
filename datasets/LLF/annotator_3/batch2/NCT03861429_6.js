'INC'

'-  Age > 65 years'

'-  age() eq(op(GT), val("65"), temporal_unit(YEAR))'

age()
    .num_filter(
        eq(op(GT), val("65"), temporal_unit(YEAR))
    )
