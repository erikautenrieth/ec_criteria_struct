'EXC'

'-  Subjects with BMI ≥ 30 or < 25 kg / m 2'

'-  Subjects with vital("BMI") eq(op(GTEQ), val("30")) or eq(op(LT), val("25"), unit("kg"), unit("m 2"))'

vital("BMI")
    .num_filter(
        or(
            eq(op(GTEQ), val("30")),
            eq(op(LT), val("25"), unit("kg"), unit("m 2"))
        )
    )