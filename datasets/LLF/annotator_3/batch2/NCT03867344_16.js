'EXC'

'-  Hemoglobin A 1c ≥ 6.5 %'

'-  lab("Hemoglobin A 1c") eq(op(GTEQ), val("6.5"), unit("%"))'

lab("Hemoglobin A 1c")
    .num_filter(
        eq(op(GTEQ), val("6.5"), unit("%"))
    )
