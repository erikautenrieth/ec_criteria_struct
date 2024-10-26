'EXC'

'-  Patient has known or suspected active seizure disorder'

'-  Patient has known or possible() eq(temporal_per(PRESENT)) cond("seizure disorder")'

cond("seizure disorder")
    .possible()
    .temporality(
        eq(temporal_per(PRESENT))
    )