'INC'

'-  Fasting blood glucose < 6.0 mmol / L'

'-  mod("Fasting") lab("blood glucose") eq(op(LT), val("6.0"), unit("mmol"), unit("L"))'

lab("blood glucose")
    .mod("Fasting")
    .num_filter(
        eq(op(LT), val("6.0"), unit("mmol"), unit("L"))
    )