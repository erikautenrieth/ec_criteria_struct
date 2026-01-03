'INC'

'-  At least 6 months after stroke ,'

'-  eq(op(GTEQ), val("6"), temporal_unit(MONTH)) after cond("stroke") ,'

cond("stroke")
    .duration(
        eq(op(GTEQ), val("6"), temporal_unit(MONTH))
    )