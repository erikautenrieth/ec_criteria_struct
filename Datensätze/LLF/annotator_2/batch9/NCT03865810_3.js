'EXC'

'-  Patients undergoing emergency surgery'

'-  Patients eq(temporal_per(PRESENT)) mod("emergency") proc("surgery")'

proc("surgery")
    .temporality(
        eq(temporal_per(PRESENT))
    )
    .mod("emergency")