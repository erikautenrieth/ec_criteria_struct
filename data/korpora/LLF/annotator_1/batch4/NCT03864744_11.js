'EXC'

'-  Haemoglobin < 6 mmol / L'

'-  lab("Haemoglobin") eq(op(LT), val("6"), unit("mmol"), unit("L"))'

lab("Haemoglobin")
    .num_filter(
        eq(op(LT), val("6"), unit("mmol"), unit("L"))
    )