'INC'

'3.  Patients who starts new treatment ( those who have previous history of treatment are eligible )'

'3.  Patients who starts eq(temporal_rec(FIRST_TIME)) proc() ( those who have eq(temporal_per(PAST)) of proc() are eligible )'

union(
    proc()
        .temporality(
            eq(temporal_rec(FIRST_TIME))
        ),
    proc()
        .temporality(
            eq(temporal_per(PAST))
        )
)