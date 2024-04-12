'EXC'

'-  schizophreniform disorder / active psychosis'

'-  cond("schizophreniform disorder") / eq(temporal_per(PRESENT)) cond("psychosis")'

union(
    cond("schizophreniform disorder"),
    cond("psychosis")
        .temporality(
            eq(temporal_per(PRESENT))
        )
)