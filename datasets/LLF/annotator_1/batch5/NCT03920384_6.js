'EXC'

'-  Currently receiving or have received CBTp in the last 6 months'

'-  eq(temporal_per(PRESENT)) or have eq(temporal_per(PAST)) proc("CBTp") in the eq(temporal_per(PAST), val("6"), temporal_unit(MONTH))'

proc("CBTp")
    .temporality(
        or(
            eq(temporal_per(PRESENT)),
            eq(temporal_per(PAST))
        )
    )
    .temporality(
        eq(temporal_per(PAST), val("6"), temporal_unit(MONTH))
    )