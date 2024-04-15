'INC'

'-  No documented history of atrial fibrillation'

'-  neg() documented eq(temporal_per(PAST)) of cond("atrial fibrillation")'

neg(
    cond("atrial fibrillation")
        .temporality(
            eq(temporal_per(PAST))
        )
)