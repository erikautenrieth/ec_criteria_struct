'EXC'

'-  BMI greater than or equal to 35 kg / m^ 2'

'-  vital("BMI") eq(op(GTEQ), val("35"), unit("kg"), unit("m^ 2"))'

vital("BMI")
    .num_filter(
        eq(op(GTEQ), val("35"), unit("kg"), unit("m^ 2"))
    )