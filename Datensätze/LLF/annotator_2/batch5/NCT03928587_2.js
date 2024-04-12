'INC'

'2.  Age 5 - 8 years , both inclusive , at inclusion'

'2.  age() eq(val("5"), op(BETWEEN), val("8"), temporal_unit(YEAR)) , both inclusive , at inclusion'

age()
    .num_filter(
        eq(val("5"), op(BETWEEN), val("8"), temporal_unit(YEAR))
    )