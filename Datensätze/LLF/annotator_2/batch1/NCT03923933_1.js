'INC'

'-  glomerular filtration rate less than 30 ml / min / 1.73 m'

'-  lab("glomerular filtration rate") eq(op(LT), val("30"), unit("ml"), per(MINUTE), unit("1.73 m"))'

lab("glomerular filtration rate")
    .num_filter(
        eq(op(LT), val("30"), unit("ml"), per(MINUTE), unit("1.73 m"))
    )