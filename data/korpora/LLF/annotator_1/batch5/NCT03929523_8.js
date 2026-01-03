'INC'

'-  BMI > 30'

'-  vital("BMI") eq(op(GT), val("30"))'

vital("BMI")
    .num_filter(
        eq(op(GT), val("30"))
    )