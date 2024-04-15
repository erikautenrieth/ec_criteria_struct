'INC'

'-  Previous incision and drainage allowed'

'-  eq(temporal_per(PAST)) proc("incision") and proc("drainage") allowed'

union(
    proc("incision"),
    proc("drainage")
)
.temporality(
    eq(temporal_per(PAST))
)