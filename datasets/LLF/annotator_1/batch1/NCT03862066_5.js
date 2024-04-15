'EXC'

'-  prior immunotherapy or treatment with another anti PD - 1 agent besides nivolumab'

'-  eq(temporal_per(PAST)) proc("immunotherapy") or proc() with other drug("anti PD - 1 agent") except() drug("nivolumab")'

union(
    proc("immunotherapy"),
    drug("anti PD - 1 agent")
        .except(
            drug("nivolumab")
        )
)
    .temporality(
        eq(temporal_per(PAST))
    )