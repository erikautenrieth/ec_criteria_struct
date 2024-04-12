'EXC'

'4.  Currently receiving psychotherapy / counseling for anxiety'

'4.  eq(temporal_per(PRESENT)) proc("psychotherapy") / proc("counseling") for cond("anxiety")'

union(
    proc("psychotherapy"),
    proc("counseling")
)
    .temporality(
        eq(temporal_per(PRESENT))
    )
    .for(
        cond("anxiety")
    )