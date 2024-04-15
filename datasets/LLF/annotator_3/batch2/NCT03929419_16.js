'EXC'

'-  Surgery less than 3 months ago'

'-  proc("Surgery") eq(op(LT), val("3"), temporal_unit(MONTH), temporal_per(PAST))'

proc("Surgery")
    .temporality(
        eq(op(LT), val("3"), temporal_unit(MONTH), temporal_per(PAST))
    )