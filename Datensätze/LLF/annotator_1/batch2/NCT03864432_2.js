'INC'

'-  Subjects weighing between 50 kg ( inclusive ) and 90 kg ( exclusive ) , and having a body mass index ( BMI ) of 17.1 ~ 25.8 ( inclusive of limits ) .'

'-  Subjects vital("weighing") eq(op(BETWEEN), val("50"), unit("kg"), val("90"), unit("kg")) ( exclusive ) , and having a vital("body mass index") ( vital("BMI") ) of eq(val("17.1"), op(BETWEEN), val("25.8")) ( inclusive of limits ) .'

intersect(
    vital("weighing")
        .num_filter(
            eq(op(BETWEEN), val("50"), unit("kg"), val("90"), unit("kg"))
        ),
    vital("body mass index")
        .equiv(
            vital("BMI")
        )
        .num_filter(
            eq(val("17.1"), op(BETWEEN), val("25.8"))
        )
)