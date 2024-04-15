'EXC'

'History of bleeding disorder in past or present'

'eq(temporal_per(PAST)) of cond("bleeding disorder") in eq(temporal_per(PAST)) or eq(temporal_per(PRESENT))'

cond("bleeding disorder")
    .temporality(
        or(
            eq(temporal_per(PAST)), 
            eq(temporal_per(PRESENT))
        )
    )