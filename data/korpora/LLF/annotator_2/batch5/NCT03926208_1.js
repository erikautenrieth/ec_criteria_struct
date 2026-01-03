'INC'

'1.  ≥ 18 years of age'

'1.  eq(op(GTEQ), val("18"), temporal_unit(YEAR)) of age()'

age()
    .num_filter(
        eq(op(GTEQ), val("18"), temporal_unit(YEAR))
    )