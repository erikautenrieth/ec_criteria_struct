'EXC'

'-  current or history of use of estrogen - progestin therapy or contraceptives'

'-  eq(temporal_per(PRESENT)) or eq(temporal_per(PAST)) of use of proc("estrogen - progestin therapy") or proc("contraceptives")'

union(
    proc("estrogen - progestin therapy"),
    proc("contraceptives")
)
.temporality(
    or(
        eq(temporal_per(PRESENT)),
        eq(temporal_per(PAST))
    )
)