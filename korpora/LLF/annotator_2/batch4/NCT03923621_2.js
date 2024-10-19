'INC'

'-  Pilonidal disease < 3 previous treatments'

'-  cond("Pilonidal disease") eq(op(LT), val("3")) eq(temporal_per(PAST)) proc()'

intersect(
    cond("Pilonidal disease"),
    proc()
        .num_filter(
            eq(op(LT), val("3"))
        )
        .temporality(
            eq(temporal_per(PAST))
        )
)