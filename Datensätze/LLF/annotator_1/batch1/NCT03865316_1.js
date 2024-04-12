'INC'

'-  Patients 18 years old and older at the time of consent .'

'-  Patients eq(val("18"), temporal_unit(YEAR), op(GTEQ)) at the time of consent .'

age()
    .num_filter(
        eq(val("18"), temporal_unit(YEAR), op(GTEQ))
    )