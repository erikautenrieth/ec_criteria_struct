'EXC'

'-  Presence or history of clinically significant diseases'

'-  eq(temporal_per(PRESENT)) or eq(temporal_per(PAST)) of clinically severity(SEVERE) cond()'

cond()
    .temporality(
        or(
            eq(temporal_per(PRESENT)), 
            eq(temporal_per(PAST))
        )
    )
    .severity(SEVERE)