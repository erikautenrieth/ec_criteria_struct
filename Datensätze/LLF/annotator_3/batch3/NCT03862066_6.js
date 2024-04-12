'EXC'

'-  prior chemotherapy including cetuximab or radiation therapy'

'-  eq(temporal_per(PAST)) proc("chemotherapy") including drug("cetuximab") or proc("radiation therapy")'

proc("chemotherapy")
    .temporality(
        eq(temporal_per(PAST))
    )
    .equiv(
        drug("cetuximab"),
        proc("radiation therapy")
    )
