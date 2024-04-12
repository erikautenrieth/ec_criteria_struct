'EXC'

'-  Under treatment for severe psychiatric pathology'

'-  eq(temporal_per(PRESENT)) proc() for severity(SEVERE) cond("psychiatric pathology")'

proc()
    .temporality(
        eq(temporal_per(PRESENT))
    )
    .for(
        cond("psychiatric pathology")
            .severity(SEVERE)
    )