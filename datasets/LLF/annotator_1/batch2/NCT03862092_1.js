'INC'

'-  Patients aged ≥ 18 , and < 80 years'

'-  Patients age() eq(op(GTEQ), val("18")) , and eq(op(LT), val("80"), temporal_unit(YEAR))'

age()
    .num_filter(
        and(
            eq(op(GTEQ), val("18")),
            eq(op(LT), val("80"), temporal_unit(YEAR))
        )
    )