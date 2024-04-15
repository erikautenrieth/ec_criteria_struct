'INC'

'-  mechanical ventilation expected for at least 48 hours'

'-  proc("mechanical ventilation") eq(temporal_per(FUTURE)) for eq(op(GTEQ), val("48"), temporal_unit(HOUR))'


proc("mechanical ventilation")
    .temporality(
        eq(temporal_per(FUTURE))
    )
    .duration(
        eq(op(GTEQ), val("48"), temporal_unit(HOUR))
    )

