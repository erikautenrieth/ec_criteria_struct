'EXC'

'-  Angina with 6 months'

'-  cond("Angina") with eq(val("6"), temporal_unit(MONTH))'

cond("Angina")
    .duration(
        eq(val("6"), temporal_unit(MONTH))
    )