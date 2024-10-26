'EXC'

'-  Previous or pre - existing confirmed TB diagnosis'

'-  eq(temporal_per(PAST)) or eq(temporal_per(PAST)) confirmed cond("TB") diagnosis'

cond("TB")
    .temporality(
        or(
            eq(temporal_per(PAST)),
            eq(temporal_per(PAST))
        )
    )