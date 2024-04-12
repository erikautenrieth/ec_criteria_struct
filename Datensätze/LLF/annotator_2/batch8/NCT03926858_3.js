'INC'

'-  Hospitalized for at least 24 hours after surgery'

'-  enc(INPATIENT) for eq(op(GTEQ), val("24"), temporal_unit(HOUR)) after proc("surgery")'

seq(
    enc(INPATIENT)
        .duration(
            eq(op(GTEQ), val("24"), temporal_unit(HOUR))
        ),
    after(
        proc("surgery")
    )
)