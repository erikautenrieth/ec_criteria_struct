'INC'

'2.  Patient aged 18 years or older'

'2.  Patient age() eq(val("18"), temporal_unit(YEAR), op(GTEQ))'

age()
    .num_filter(
        eq(val("18"), temporal_unit(YEAR), op(GTEQ))
    )