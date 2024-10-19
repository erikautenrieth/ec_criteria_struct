'INC'

'3.  at least 18 years of age;'

'3.  eq(op(GTEQ), val("18"), temporal_unit(YEAR)) of age() ;'

age()
    .num_filter(
        eq(op(GTEQ), val("18"), temporal_unit(YEAR))
    )