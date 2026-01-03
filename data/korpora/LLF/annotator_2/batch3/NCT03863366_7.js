'EXC'

'-  Any past or current Axis 1 DSM - IV psychiatric disorder'

'-  Any eq(temporal_per(PAST)) or eq(temporal_per(PRESENT)) mod("Axis 1 DSM - IV") cond("psychiatric disorder")'

cond("psychiatric disorder")
    .mod("Axis 1 DSM - IV")
    .temporality(
        or(
            eq(temporal_per(PAST)),
            eq(temporal_per(PRESENT))
        )
    )