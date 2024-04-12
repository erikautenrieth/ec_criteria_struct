'EXC'

'-  History of cardiometabolic or inflammatory illness'

'-  eq(temporal_per(PAST)) of mod("cardiometabolic") or mod("inflammatory") cond("illness")'

cond("illness")
    .temporality(
        eq(temporal_per(PAST))
    )
    .mod("cardiometabolic")
    .mod("inflammatory") 