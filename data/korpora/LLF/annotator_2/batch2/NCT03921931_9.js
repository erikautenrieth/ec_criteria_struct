'INC'

'-  MD < = 10 dB'

'-  obs("MD") eq(op(LTEQ), val("10"), unit("dB"))'

obs("MD")
    .num_filter(
        eq(op(LTEQ), val("10"), unit("dB"))
    )