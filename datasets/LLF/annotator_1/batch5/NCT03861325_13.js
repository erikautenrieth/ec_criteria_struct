'EXC'

'-  The patient has undergone or is going to have scheduled or emergency digestive surgery'

'-  The patient eq(temporal_per(PAST)) or eq(temporal_per(FUTURE)) scheduled or enc(EMERGENCY) proc("digestive surgery")'

union(
    proc("digestive surgery")
        .temporality(
            or(
                eq(temporal_per(PAST)),
                eq(temporal_per(FUTURE))
            )
        ),
    seq(
        enc(EMERGENCY),
        during(
            proc("digestive surgery")
        )
    )
)