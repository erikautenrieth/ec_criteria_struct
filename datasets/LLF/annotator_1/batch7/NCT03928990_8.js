'EXC'

'-  Introduction of a treatment acting on spasticity or fatigue within 30 day before enrollment'

'-  eq(temporal_rec(FIRST_TIME)) of a proc() acting on cond("spasticity") or cond("fatigue") eq(op(LTEQ), val("30"), temporal_unit(DAY)) before enrollment'

proc()
    .for(
        cond("spasticity"),
        cond("fatigue")
    )
    .temporality(
        eq(temporal_rec(FIRST_TIME))
    )
    .temporality(
        eq(op(LTEQ), val("30"), temporal_unit(DAY))
    )