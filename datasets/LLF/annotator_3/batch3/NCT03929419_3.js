'INC'

'-  Age between 18 and 30 years'

'-  age() eq(op(BETWEEN), val("18"), val("30"), temporal_unit(YEAR))'

age()
    .num_filter(
        eq(op(BETWEEN), val("18"), val("30"), temporal_unit(YEAR))
    )