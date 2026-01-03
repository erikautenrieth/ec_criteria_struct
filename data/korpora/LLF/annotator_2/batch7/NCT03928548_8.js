'EXC'

'-  Received nutrition care previously during current admission'

'-  eq(temporal_per(PAST)) proc("nutrition care") eq(temporal_per(PAST)) during eq(temporal_rec(MOST_RECENT_TIME)) enc(INPATIENT)'

seq(
    proc("nutrition care")
        .temporality(
            and(
                eq(temporal_per(PAST)),
                eq(temporal_per(PAST))
            )
        ),
    during(
        enc(INPATIENT)
            .temporality(
                eq(temporal_rec(MOST_RECENT_TIME))
            )
    )
)