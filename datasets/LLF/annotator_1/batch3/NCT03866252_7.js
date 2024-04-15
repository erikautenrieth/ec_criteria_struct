'EXC'

'-  Concomitant diagnosis of past or present bipolar disorder'

'-  Concomitant diagnosis of eq(temporal_per(PAST)) or eq(temporal_per(PRESENT)) cond("bipolar disorder")'

cond("bipolar disorder")
    .temporality(
        or(
            eq(temporal_per(PAST)), 
            eq(temporal_per(PRESENT))
        )
    )