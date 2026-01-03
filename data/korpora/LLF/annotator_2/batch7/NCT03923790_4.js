'INC'

'-  Plan to discharge home after stroke'

'-  eq(temporal_per(FUTURE)) to enc(DISCHARGE) home after cond("stroke")'

seq(
    enc(DISCHARGE)
        .temporality(
            eq(temporal_per(FUTURE))
        ),
    after(
        cond("stroke")
    )
)