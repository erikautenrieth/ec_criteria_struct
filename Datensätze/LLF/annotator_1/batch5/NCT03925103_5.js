'INC'

'-  Body mass index ( BMI ) > 18 < 28'

'-  vital("Body mass index") ( vital("BMI") ) eq(op(GT), val("18")) eq(op(LT), val("28"))'

vital("Body mass index")
    .equiv(
        vital("BMI")
    )
    .num_filter(
        and(
            eq(op(GT), val("18")),
            eq(op(LT), val("28"))
        )
    )