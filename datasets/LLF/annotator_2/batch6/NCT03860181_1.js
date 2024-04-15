'INC'

'-  They are 18 years or older ;'

'-  They are eq(val("18"), temporal_unit(YEAR), op(GTEQ)) ;'

age()
    .num_filter(
        eq(val("18"), temporal_unit(YEAR), op(GTEQ))
    )