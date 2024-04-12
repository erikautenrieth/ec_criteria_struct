'INC'

'-  BMI = 18.5 - 29.9 kg / m 2'

'-  vital("BMI") eq(op(EQ), val("18.5"), op(BETWEEN), val("29.9"), unit("kg"), unit("m 2"))'

vital("BMI")
    .num_filter(
        eq(op(EQ), val("18.5"), op(BETWEEN), val("29.9"), unit("kg"), unit("m 2"))
    )