'INC'

'-  Age ≥ 20 and ≤ 40 years'

'-  age() eq(op(GTEQ), val("20"), op(BETWEEN), op(LTEQ), val("40"), temporal_unit(YEAR))'

age()
    .num_filter(
        eq(op(GTEQ), val("20"), op(BETWEEN), op(LTEQ), val("40"), temporal_unit(YEAR))
    )