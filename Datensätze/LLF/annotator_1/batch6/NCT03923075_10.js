'EXC'

'-  recent respiratory infection'

'-  eq(temporal_per(RECENT)) cond("respiratory infection")'

cond("respiratory infection")
    .temporality(
        eq(temporal_per(RECENT))
    )