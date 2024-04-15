'EXC'

'-  h / o scleral lens wear or current scleral lens wear'

'-  eq(temporal_per(PAST)) cond("scleral lens") wear or eq(temporal_per(PRESENT)) cond("scleral lens") wear'

union(
    cond("scleral lens")
        .temporality(
            eq(temporal_per(PAST))
        ),
    cond("scleral lens")
        .temporality(
            eq(temporal_per(PRESENT))
        )
)
