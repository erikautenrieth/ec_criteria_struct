'INC'

'-  Subjects aged 13 years or older'

'-  Subjects age() eq(val("13"), temporal_unit(YEAR), op(GTEQ))'

age()
    .num_filter(
        eq(val("13"), temporal_unit(YEAR), op(GTEQ))
    )