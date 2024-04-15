'EXC'

'-  were cigarette smokers or were takiing any medication that might affect the outcome of the study ,'

'-  eq(temporal_per(PAST)) cond("cigarette smokers") or eq(temporal_per(PAST)) any medication that might affect the outcome of the study ,'

union(
    cond("cigarette smokers")
        .eq(temporal_per(PAST)),
    drug()
        .eq(temporal_per(PAST))
)