'EXC'

'-  BMI < 18.5 or ≥ 30 kg / m 2'

'-  vital("BMI") eq(op(LT), val("18.5")) or eq(op(GTEQ), val("30"), unit("kg"), unit("m 2"))'

vital("BMI")
    .num_filter(
        or(
            eq(op(LT), val("18.5")),
            eq(op(GTEQ), val("30"), unit("kg"), unit("m 2"))
        )
    )