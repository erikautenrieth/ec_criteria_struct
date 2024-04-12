'EXC'

'-  COPD exacerbation within 3 month'

'-  cond("COPD") change() eq(op(LTEQ), val("3"), temporal_unit(MONTH))'

cond("COPD")
    .change()
    .temporality(
        eq(op(LTEQ), val("3"), temporal_unit(MONTH))
    )