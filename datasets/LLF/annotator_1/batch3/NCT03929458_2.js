'INC'

'-  Received stable hemodialysis at least 3 months .'

'-  eq(temporal_per(PAST)) stable() proc("hemodialysis") eq(op(GTEQ), val("3"), temporal_unit(MONTH)) .'

proc("hemodialysis")
    .temporality(
        eq(temporal_per(PAST))
    )
    .stable()
    .duration(
        eq(op(GTEQ), val("3"), temporal_unit(MONTH))
    )