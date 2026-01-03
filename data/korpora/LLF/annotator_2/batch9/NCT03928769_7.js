'EXC'

'-  Patient who has previously undergone radiotherapy at the sampling site'

'-  Patient who has eq(temporal_per(PAST)) proc("radiotherapy") at the mod("sampling site")'

proc("radiotherapy")
    .temporality(
        eq(temporal_per(PAST))
    )
    .mod("sampling site")