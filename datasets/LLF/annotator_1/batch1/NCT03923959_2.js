'INC'

'2.  Age > or = to 65 years'

'2.  age() eq(op(GTEQ), val("65"), temporal_unit(YEAR))'

age()
    .num_filter(
        eq(op(GTEQ), val("65"), temporal_unit(YEAR))
    )