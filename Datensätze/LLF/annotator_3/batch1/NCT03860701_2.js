'INC'

'-  Weight greater or equal to 750 g .'

'-  vital("Weight") eq(op(GTEQ), op(BETWEEN), val("750"), unit("g")) .'


vital("Weight")
    .num_filter(
        eq(op(GTEQ), op(BETWEEN), val("750"), unit("g"))
    )
