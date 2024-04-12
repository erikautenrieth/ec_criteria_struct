'INC'

'-  BMI 25 - 35 kg / m 2 will be recruited'

'-  vital("BMI") eq(val("25"), op(BETWEEN), val("35"), unit("kg"), unit("m 2")) will be recruited'

vital("BMI")
    .num_filter(
        eq(val("25"), op(BETWEEN), val("35"), unit("kg"), unit("m 2"))
    )