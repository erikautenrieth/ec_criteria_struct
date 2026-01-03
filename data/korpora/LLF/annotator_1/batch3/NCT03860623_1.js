'INC'

'-  BMI 30 - 40 kg / m 2'

'-  vital("BMI") eq(val("30"), op(BETWEEN), val("40"), unit("kg"), unit("m 2"))'

vital("BMI")
    .num_filter(
        eq(val("30"), op(BETWEEN), val("40"), unit("kg"), unit("m 2"))
    )