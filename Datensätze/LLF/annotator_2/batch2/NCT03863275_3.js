'EXC'

'-  Patients who have had previous orthopedic treatment'

'-  Patients who have had eq(temporal_per(PAST)) proc("orthopedic treatment")'

proc("orthopedic treatment")
    .temporality(
        eq(temporal_per(PAST))
    )