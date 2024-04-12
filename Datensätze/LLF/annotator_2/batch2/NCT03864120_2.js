'INC'

'2.  on PD treatment for at least one month'

'2.  eq(temporal_per(PRESENT)) cond("PD") proc() for eq(op(GTEQ), val("one"), temporal_unit(MONTH))'

proc()
    .for(
        cond("PD")
    )
    .temporality(
        eq(temporal_per(PRESENT))
    )
    .duration(
        eq(op(GTEQ), val("one"), temporal_unit(MONTH))
    )
