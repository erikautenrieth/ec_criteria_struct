'INC'

'1.  20 - 75 years old'

'1.  eq(val("20"), op(BETWEEN), val("75"), temporal_unit(YEAR)) age()'

age()
    .num_filter(
        eq(val("20"), op(BETWEEN), val("75"), temporal_unit(YEAR))
    )