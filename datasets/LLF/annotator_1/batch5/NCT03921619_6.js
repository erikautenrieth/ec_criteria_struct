'EXC'

'-  Pre - existing symptomatic upper or lower extremity disease'

'-  eq(temporal_per(PAST)) possible() mod("upper") or mod("lower extremity") cond()'

cond()
    .temporality(
        eq(temporal_per(PAST))
    )
    .possible()
    .mod("lower extremity")
    .mod("upper")
    