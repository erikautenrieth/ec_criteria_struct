'EXC'

'-  Women with a history of previous pregnancy'

'-  female() with a eq(temporal_per(PAST)) cond("pregnancy")'

intersect(
    female(), 
    cond("pregnancy")
        .temporality(
            eq(temporal_per(PAST))
        )
)