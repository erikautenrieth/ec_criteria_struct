'INC'

'-  Patients age : ≥ 22 years'

'-  Patients age() : eq(op(GTEQ), val("22"), temporal_unit(YEAR))'

age()
    .num_filter(
        eq(op(GTEQ), val("22"), temporal_unit(YEAR))
    )