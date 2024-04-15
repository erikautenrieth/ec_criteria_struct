'EXC'

'-  6.  severe obesity ( BMI > 30 kg / m 2 )'

'-  6.  severity(SEVERE) cond("obesity") ( vital("BMI") eq(op(GT), val("30"), unit("kg"), unit("m 2")) )'

cond("obesity")
    .severity(SEVERE)
    .equiv(
        vital("BMI")
            .num_filter(
                eq(op(GT), val("30"), unit("kg"), unit("m 2"))
            )
    )
