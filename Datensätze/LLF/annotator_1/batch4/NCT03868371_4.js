'INC'

'-  Plasma phosphate between 0.7 and 3.0 mmol / L for > 3 months'

'-  lab("Plasma phosphate") eq(op(BETWEEN), val("0.7"), val("3.0"), unit("mmol"), unit("L")) for eq(op(GT), val("3"), temporal_unit(MONTH))'

lab("Plasma phosphate")
    .num_filter(
        eq(op(BETWEEN), val("0.7"), val("3.0"), unit("mmol"), unit("L"))
    )
    .duration(
        eq(op(GT), val("3"), temporal_unit(MONTH))
    )
