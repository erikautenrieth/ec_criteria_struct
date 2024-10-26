'EXC'

'-  Suspicion of neoplasia or active neoplasia'

'-  possible() of cond("neoplasia") or eq(temporal_per(PRESENT)) cond("neoplasia")'

union(
    cond("neoplasia"),
    cond("neoplasia")
        .temporality(
            eq(temporal_per(PRESENT))
        )
)
    .possible()