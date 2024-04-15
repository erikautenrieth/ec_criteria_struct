'EXC'

'-  Have or had vestibular pathology , cranial base surgery or ossicular chain reconstruction'

'-  eq(temporal_per(PRESENT)) or eq(temporal_per(PAST)) cond("vestibular pathology") , proc("cranial base surgery") or proc("ossicular chain reconstruction")'

union(
    cond("vestibular pathology"),
    proc("cranial base surgery"),
    proc("ossicular chain reconstruction")
)
.temporality(
    or(
        eq(temporal_per(PRESENT)), 
        eq(temporal_per(PAST))
    )
)
