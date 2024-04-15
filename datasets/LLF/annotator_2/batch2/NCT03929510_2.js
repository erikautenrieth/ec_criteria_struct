'INC'

'-  Body mass index ( BMI ) of 17.5 to 30.5 kg / m 2 ; and a total body weight > 50 kg ( 110 lb ) .'

'-  vital("Body mass index") ( vital("BMI") ) of eq(val("17.5"), op(BETWEEN), val("30.5"), unit("kg"), per("m 2")) ; and a total vital("body weight") eq(op(GT), val("50"), unit("kg")) ( eq(val("110"), unit("lb")) ) .'

intersect(
    vital("Body mass index")
        .equiv(
            vital("BMI")
        )
        .num_filter(
            eq(val("17.5"), op(BETWEEN), val("30.5"), unit("kg"), unit("m 2"))
        ),
    vital("body weight")
        .num_filter(
            or(
                eq(op(GT), val("50"), unit("kg"), eq(val("110"), unit("lb"))),
                eq(val("110"), unit("lb"))
            )
        )
)
