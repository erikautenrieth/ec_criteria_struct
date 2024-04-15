'EXC'

'-  Patients with congestive heart failure or a history of congestive heart failure'

'-  Patients with cond("congestive heart failure") or a eq(temporal_per(PAST)) of cond("congestive heart failure")'

union(
    cond("congestive heart failure"), 
    cond("congestive heart failure")
        .temporality(
            eq(temporal_per(PAST))
        )
)