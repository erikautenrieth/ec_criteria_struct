'EXC'

'-  hemoglobin < 70 g / L'

'-  lab("hemoglobin") eq(op(LT), val("70"), unit("g"), unit("L"))'

lab("hemoglobin")
    .num_filter(
        eq(op(LT), val("70"), unit("g"), unit("L"))
    )