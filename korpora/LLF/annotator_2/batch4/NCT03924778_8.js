'EXC'

'-  antibiotic or probiotic use in the previous 90 days'

'-  drug("antibiotic") or drug("probiotic") use in the eq(temporal_per(PAST), val("90"), temporal_unit(DAY))'

union(
    drug("antibiotic"),
    drug("probiotic")
)
    .temporality(
        eq(temporal_per(PAST), val("90"), temporal_unit(DAY))
    )