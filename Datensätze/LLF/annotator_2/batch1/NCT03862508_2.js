'INC'

'-  Age between 18 and 40 years'

'-  age() eq(op(BETWEEN), val("18"), val("40"), temporal_unit(YEAR))'

age()
    .num_filter(
        eq(op(BETWEEN), val("18"), val("40"), temporal_unit(YEAR))
    )