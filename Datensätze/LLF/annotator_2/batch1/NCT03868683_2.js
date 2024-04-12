'INC'

'-  Age ≥ 21 and ≤ 60 years'

'-  age() eq(op(GTEQ), val("21")) and eq(op(LTEQ), val("60"), temporal_unit(YEAR))'

age()
    .num_filter(
        and(
            eq(op(GTEQ), val("21")),
            eq(op(LTEQ), val("60"), temporal_unit(YEAR))
        )
    )