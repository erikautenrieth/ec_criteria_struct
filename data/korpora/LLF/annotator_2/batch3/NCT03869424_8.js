'EXC'

'-  intake of illegal drugs in the last two weeks'

'-  intake of mod("illegal") drug() in the eq(temporal_per(PAST), val("two"), temporal_unit(WEEK))'

drug()
    .mod("illegal")
    .temporality(
        eq(temporal_per(PAST), val("two"), temporal_unit(WEEK))
    )