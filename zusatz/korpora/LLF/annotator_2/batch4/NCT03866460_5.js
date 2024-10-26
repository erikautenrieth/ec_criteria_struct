'EXC'

'-  Children with known and documented preexisting hearing loss .'

'-  child() with known and documented eq(temporal_per(PAST)) cond("hearing loss") .'

intersect(
    child(),
    cond("hearing loss")
        .temporality(
            eq(temporal_per(PAST))
        )
)
