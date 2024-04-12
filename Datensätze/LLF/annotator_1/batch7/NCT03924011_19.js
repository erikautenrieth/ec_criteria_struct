'EXC'

'-  HIV positive history'

'-  cond("HIV") pol(POSITIVE) eq(temporal_per(PAST))'

cond("HIV")
    .pol(POSITIVE)
    .temporality(
        eq(temporal_per(PAST))
    )