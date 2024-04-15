'INC'

'2.  Age > 21 years old'

'2.  age() eq(op(GT), val("21"), temporal_unit(YEAR)) old'

age()
    .num_filter(
        eq(op(GT), val("21"), temporal_unit(YEAR))
    )
