'INC'

'-  Stable dose of oral medication for at least 3 months'

'-  stable() dose of mod("oral") drug() for eq(op(GTEQ), val("3"), temporal_unit(MONTH))'

drug()
    .stable()
    .mod("oral")
    .duration(
        eq(op(GTEQ), val("3"), temporal_unit(MONTH))
    )