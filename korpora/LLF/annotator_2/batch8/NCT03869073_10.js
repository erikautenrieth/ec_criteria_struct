'EXC'

'-  Previous episode of sepsis during that hospital admission'

'-  eq(temporal_per(PAST)) episode of cond("sepsis") during that hospital enc(INPATIENT)'

seq(
    cond("sepsis")
        .temporality(
            eq(temporal_per(PAST))
        ),
    during(
        enc(INPATIENT)
    )
)