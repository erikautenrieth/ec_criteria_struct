'EXC'

'1.  Age less than 21 years old'

'1.  age() eq(op(LT), val("21"), temporal_unit(YEAR)) old'

age()
    .num_filter(
        eq(op(LT), val("21"), temporal_unit(YEAR))
    )