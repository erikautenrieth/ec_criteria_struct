'INC'

'-  No history of seizure disorder or other neurological disorders'

'-  neg() eq(temporal_per(PAST)) of cond("seizure disorder") or other cond("neurological disorders")'

neg(
    cond("seizure disorder"),
    cond("neurological disorders")
)
    .temporality(
        eq(temporal_per(PAST))
    )