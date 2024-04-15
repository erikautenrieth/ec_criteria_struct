'EXC'

'-  Thrombocytopenia < 150 G / L'

'-  cond("Thrombocytopenia") eq(op(LT), val("150"), unit("G"), unit("L"))'

cond("Thrombocytopenia")
    .num_filter(
        eq(op(LT), val("150"), unit("G"), unit("L"))
    )