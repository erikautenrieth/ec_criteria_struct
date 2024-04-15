'INC'

'1.  Age greater than or equal to 21 years old'

'1.  age() eq(op(GTEQ), val("21"), temporal_unit(YEAR)) old'

age()
    .num_filter(
        eq(op(GTEQ), val("21"), temporal_unit(YEAR))
    )