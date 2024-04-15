'INC'

'2.  MMSE < 15'

'2.  obs("MMSE") eq(op(LT), val("15"))'

obs("MMSE")
    .num_filter(
        eq(op(LT), val("15"))
    )