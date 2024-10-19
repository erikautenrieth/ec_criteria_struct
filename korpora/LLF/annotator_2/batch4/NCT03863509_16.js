'INC'

'-  Cotinine > 100 ng / ml'

'-  lab("Cotinine") eq(op(GT), val("100"), unit("ng"), unit("ml"))'

lab("Cotinine")
    .num_filter(
        eq(op(GT), val("100"), unit("ng"), unit("ml"))
    )