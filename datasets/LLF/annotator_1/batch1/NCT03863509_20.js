'INC'

'-  > / = 5 ppm CO'

'-  eq(op(GTEQ), val("5"), unit("ppm")) obs("CO")'

obs("CO")
    .num_filter(
        eq(op(GTEQ), val("5"), unit("ppm"))
    )