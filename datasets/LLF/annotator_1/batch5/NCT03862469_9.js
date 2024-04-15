'EXC'

'-  Breath alcohol concentration > 0.00 %'

'-  lab("Breath alcohol concentration") eq(op(GT), val("0.00"), unit("%"))'

lab("Breath alcohol concentration")
    .num_filter(
        eq(op(GT), val("0.00"), unit("%"))
    )