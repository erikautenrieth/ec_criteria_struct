'EXC'

'-  Pulmonary rehabilitation program during the last 2 months'

'-  proc("Pulmonary rehabilitation") program during the eq(temporal_per(PAST), val("2"), temporal_unit(MONTH))'

proc("Pulmonary rehabilitation")
    .temporality(
        eq(temporal_per(PAST), val("2"), temporal_unit(MONTH))
    )