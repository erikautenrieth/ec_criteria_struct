'INC'

'-  age 20 - 34 years ;'

'-  age() eq(val("20"), op(BETWEEN), val("34"), temporal_unit(YEAR)) ;'

age()
    .num_filter(
        eq(val("20"), op(BETWEEN), val("34"), temporal_unit(YEAR))
    )