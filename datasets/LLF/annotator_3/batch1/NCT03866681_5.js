'INC'

'-  ECOG ≤ 2'

'-  obs("ECOG") eq(op(LTEQ), val("2"))'
obs("ECOG")
    .num_filter(
        eq(op(LTEQ), val("2"))
    )