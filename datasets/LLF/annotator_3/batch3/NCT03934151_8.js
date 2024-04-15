'EXC'

'-  BMI > 35'

'-  vital("BMI") eq(op(GT), val("35"))'

vital("BMI")
    .num_filter(
        eq(op(GT), val("35"))
    )