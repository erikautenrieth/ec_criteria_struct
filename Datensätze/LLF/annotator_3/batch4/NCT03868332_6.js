'EXC'

'-  Previous history of cardiovascular or cerebrovascular events'

'-  eq(temporal_per(PAST)) of mod("cardiovascular") or mod("cerebrovascular") cond("events")'

cond("events")
    .temporality(
        eq(temporal_per(PAST))
    )
    .mod("cardiovascular")
    .mod("cerebrovascular")