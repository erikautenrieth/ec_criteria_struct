'EXC'

'-  Urinary obstruction not lifted within the first 24 hours of management'

'-  cond("Urinary obstruction") neg() proc("lifted") eq(op(LTEQ), temporal_rec(FIRST_TIME), val("24"), temporal_unit(HOUR)) of management'

intersect(
    cond("Urinary obstruction"),
    neg(
        proc("lifted")
            .num_filter(
                eq(op(LTEQ), temporal_rec(FIRST_TIME), val("24"), temporal_unit(HOUR))
            )
    )
)