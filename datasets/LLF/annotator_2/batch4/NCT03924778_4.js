'INC'

'-  BMI > = 30 kg / m^ 2'

'-  vital("BMI") eq(op(GTEQ), val("30"), unit("kg"), unit("m^ 2"))'

vital("BMI")
    .num_filter(
        eq(op(GTEQ), val("30"), unit("kg"), unit("m^ 2"))
    )