'EXC'

'-  history of medication for PE treatment at the time of first admission'

'-  eq(temporal_per(PAST)) of drug() for cond("PE") treatment at the time of eq(temporal_rec(FIRST_TIME)) enc(INPATIENT)'

seq(
    drug()
        .temporality(
            eq(temporal_per(PAST))
        )
        .for(
            cond("PE")
        ),
    during(
        enc(INPATIENT)
            .temporality(
                eq(temporal_rec(FIRST_TIME))
            )
    )
)