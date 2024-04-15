'INC'

'-  obesity ( body mass index [ BMI ] > 30 kg / m 2 )'

'-  cond("obesity") ( vital("body mass index") [ vital("BMI") ] eq(op(GT), val("30"), unit("kg"), unit("m 2")) )'

cond("obesity")
    .equiv(
        vital("body mass index")
            .equiv(
                vital("BMI")
            )
            .num_filter(
                eq(op(GT), val("30"), unit("kg"), unit("m 2"))
            )
    )