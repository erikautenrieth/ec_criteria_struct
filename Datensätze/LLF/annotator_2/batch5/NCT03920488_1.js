'INC'

'1.  age between 18 and 60 years'

'1.  age() eq(op(BETWEEN), val("18"), val("60"), temporal_unit(YEAR))'

age()
    .num_filter(
        eq(op(BETWEEN), val("18"), val("60"), temporal_unit(YEAR))
    )