'EXC'

'-  TBSA < 2 % .'

'-  obs("TBSA") eq(op(LT), val("2"), unit("%")) .'

obs("TBSA")
    .num_filter(
        eq(op(LT), val("2"), unit("%"))
    )