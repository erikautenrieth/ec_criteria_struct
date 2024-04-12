'INC'

'-  Use of a loop diuretic for at least one month'

'-  Use of a drug("loop diuretic") for eq(op(GTEQ), val("one"), temporal_unit(MONTH))'

drug("loop diuretic")
    .duration(
        eq(op(GTEQ), val("one"), temporal_unit(MONTH))
    )