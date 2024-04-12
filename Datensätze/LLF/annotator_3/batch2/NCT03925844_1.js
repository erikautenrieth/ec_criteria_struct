'INC'

'-  population aged 55 to 74 years from NEDICES 2 study'

'-  population age() eq(val("55"), op(BETWEEN), val("74"), temporal_unit(YEAR)) from NEDICES 2 study'

age()
    .num_filter(
        eq(val("55"), op(BETWEEN), val("74"), temporal_unit(YEAR))
    )