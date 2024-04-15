'EXC'

'-  History of lower extremity or spine surgery'

'-  eq(temporal_per(PAST)) of mod("lower extremity") or mod("spine") proc("surgery")'

proc("surgery")
    .temporality(
        eq(temporal_per(PAST))
    )
    .mod("lower extremity")
    .mod("spine")