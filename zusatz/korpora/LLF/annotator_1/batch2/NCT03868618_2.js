'INC'

'-  Likely suffer from moderate to severe OSA based on history and physical'

'-  possible() suffer from eq(severity(MILD), op(BETWEEN), severity(SEVERE)) cond("OSA") based on eq(temporal_per(PAST)) and proc("physical")'

cond("OSA")
    .possible()
    .found_by(
        proc("physical")
    )
    .severity(
        eq(severity(MILD), op(BETWEEN), severity(SEVERE))
    )
    .temporality(
        eq(temporal_per(PAST))
    )