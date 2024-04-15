'INC'

'-  Serum Glucose 100 - 126 mg / dl'

'-  lab("Serum Glucose") eq(val("100"), op(BETWEEN), val("126"), unit("mg"), unit("dl"))'

lab("Serum Glucose")
    .num_filter(
        eq(val("100"), op(BETWEEN), val("126"), unit("mg"), unit("dl"))
    )
