'EXC'

'-  Thrombocytosis > 450 G / L'

'-  cond("Thrombocytosis") eq(op(GT), val("450"), unit("G"), unit("L"))'

cond("Thrombocytosis")
    .num_filter(
        eq(op(GT), val("450"), unit("G"), unit("L"))
    )