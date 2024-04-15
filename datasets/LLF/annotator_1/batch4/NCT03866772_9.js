'EXC'

'-  previous uterine surgery ( eg : myomectomy )'

'-  eq(temporal_per(PAST)) proc("uterine surgery") ( eg : proc("myomectomy") )'

proc("uterine surgery")
    .temporality(
        eq(temporal_per(PAST))
    )
    .equiv(
        proc("myomectomy")
    )
    