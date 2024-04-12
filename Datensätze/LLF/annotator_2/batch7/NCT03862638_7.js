'EXC'

'-  Taking any prophylactic medication during the previous one month ;'

'-  eq(temporal_per(PRESENT)) any drug("prophylactic medication") during the eq(temporal_per(PAST), val("one"), temporal_unit(MONTH)) ;'

drug("prophylactic medication")
    .temporality(
        and(
            eq(temporal_per(PRESENT)),
            eq(temporal_per(PAST), val("one"), temporal_unit(MONTH))
        )
    )