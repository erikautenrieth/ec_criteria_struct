'INC'

'-  < / = 4 ppm CO'

'-  eq(op(LTEQ), val("4"), unit("ppm")) obs("CO")'

obs("CO")
    .num_filter(
        eq(op(LTEQ), val("4"), unit("ppm"))
    )