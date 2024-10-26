'INC'

'-  HbA 1c < 6.0 %'

'-  lab("HbA 1c") eq(op(LT), val("6.0"), unit("%"))'

lab("HbA 1c")
    .num_filter(
        eq(op(LT), val("6.0"), unit("%"))
    )