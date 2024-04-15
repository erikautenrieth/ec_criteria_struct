'EXC'

'-  Subject who underwent any radiotherapy on neck'

'-  Subject who eq(temporal_per(PAST)) any proc("radiotherapy") on mod("neck")'

proc("radiotherapy")
    .temporality(
        eq(temporal_per(PAST))
    )
    .mod("neck")