'INC'

'1.  Age > 18 years'

'1.  age() eq(op(GT), val("18"), temporal_unit(YEAR))'

age()
    .num_filter(
        eq(op(GT), val("18"), temporal_unit(YEAR))
    )