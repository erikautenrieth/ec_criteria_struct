'INC'

'-  Adult participants : BMI ≥ 18.0'

'-  adult() participants : vital("BMI") eq(op(GT), val("18.0"))'

adult()
    .equiv(
        vital("BMI")
            .num_filter(
                eq(op(GT), val("18.0"))
            )
    )