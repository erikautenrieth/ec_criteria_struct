'INC'

'-  Age 8 yr - 18 yrs'

'-  age() eq(val("8"), temporal_unit(YEAR), op(BETWEEN), val("18"), temporal_unit(YEAR))'

age()
    .num_filter(
        eq(val("8"), temporal_unit(YEAR), op(BETWEEN), val("18"), temporal_unit(YEAR))
    )
