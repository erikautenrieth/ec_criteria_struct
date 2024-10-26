'INC'

'-  At lest one past pregnancy'

'-  eq(op(GTEQ), val("one"), temporal_per(PAST)) cond("pregnancy")'

cond("pregnancy")
    .min_count(
        eq(op(GTEQ), val("one"), temporal_per(PAST))
    )