'INC'

'-  Increased fasting blood glucose from 6.1 to 7.0 mmol / L or ,'

'-  pol(HIGH) lab("fasting blood glucose") from eq(val("6.1"), op(BETWEEN), val("7.0"), unit("mmol"), unit("L")) or ,'

lab("fasting blood glucose")
    .pol(HIGH)
    .num_filter(
        eq(val("6.1"), op(BETWEEN), val("7.0"), unit("mmol"), unit("L"))
    )