'EXC'

'-  Patients history of renal failure or uremia , and those on dialysis'

'-  Patients eq(temporal_per(PAST)) of cond("renal failure") or cond("uremia") , and those eq(temporal_per(PRESENT)) proc("dialysis")'

intersect(
    union(
        cond("renal failure"),
        cond("uremia")
    )
        .temporality(
            eq(temporal_per(PAST))
        ),
    proc("dialysis")
        .temporality(
            eq(temporal_per(PRESENT))
        )
)