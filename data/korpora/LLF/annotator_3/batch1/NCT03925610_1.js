'INC'

'-  Body mass index ( BMI ) equal or greater than 35 kg / m 2 .'

'-  vital("Body mass index") ( vital("BMI") ) eq(op(GTEQ), val("35"), unit("kg"), unit("m 2")) .'

vital("Body mass index")
    .equiv(
        vital("BMI")
    )
    .num_filter(
        eq(op(GTEQ), val("35"), unit("kg"), unit("m 2"))
    )