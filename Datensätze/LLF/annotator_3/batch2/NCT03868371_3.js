'INC'

'-  Serum ionized calcium between 1.10 and 1.40 mmol / L for > 3 months'

'-  lab("Serum ionized calcium") eq(op(BETWEEN), val("1.10"), val("1.40"), unit("mmol"), unit("L")) for eq(op(GT), val("3"), temporal_unit(MONTH))'

lab("Serum ionized calcium")
    .num_filter(
        eq(op(BETWEEN), val("1.10"), val("1.40"), unit("mmol"), unit("L"))
    )
    .duration(
        eq(op(GT), val("3"), temporal_unit(MONTH))
    )