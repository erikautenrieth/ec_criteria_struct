'INC'

'-  2.  age , 18 to 65 years old ;'

'-  2.  age() , eq(val("18"), op(BETWEEN), val("65"), temporal_unit(YEAR)) old ;'

age()
    .num_filter(
        eq(val("18"), op(BETWEEN), val("65"), temporal_unit(YEAR))
    )

