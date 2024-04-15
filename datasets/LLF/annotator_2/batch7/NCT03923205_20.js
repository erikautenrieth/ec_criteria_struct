'EXC'

'-  taking vitamin or mineral supplements ( unless they agree to discontinue supplementation 2 weeks before the start of the study )'

'-  eq(temporal_per(PRESENT)) drug("vitamin") or drug("mineral supplements") ( unless they agree to discontinue supplementation 2 weeks before the start of the study )'

union(
    drug("vitamin"),
    drug("mineral supplements")
)
    .temporality(
        eq(temporal_per(PRESENT))
    )