'EXC'

'-  Previous spinal manipulation within the past month'

'-  eq(temporal_per(PAST)) proc("spinal manipulation") eq(op(LTEQ), temporal_per(PAST), temporal_unit(MONTH))'

proc("spinal manipulation")
    .temporality(
        and(
            eq(temporal_per(PAST)),
            eq(op(LTEQ), temporal_per(PAST), temporal_unit(MONTH))
        )
    )