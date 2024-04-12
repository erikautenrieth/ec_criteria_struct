'INC'

'-  Serum Endotoxin > 25 EU / ml'

'-  lab("Serum Endotoxin") eq(op(GT), val("25"), unit("EU"), unit("ml"))'

lab("Serum Endotoxin")
    .num_filter(
        eq(op(GT), val("25"), unit("EU"), unit("ml"))
    )