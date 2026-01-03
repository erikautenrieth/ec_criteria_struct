'EXC'

'-  Patients with known renal or genitourinary structural abnormalities or prior pelvic / genitourinary surgery'

'-  Patients with known mod("renal") or mod("genitourinary structural") cond("abnormalities") or eq(temporal_per(PAST)) mod("pelvic") / mod("genitourinary") proc("surgery")'

union(
    cond("abnormalities")
        .mod("renal")
        .mod("genitourinary structural"),
    proc("surgery")
        .temporality(
            eq(temporal_per(PAST))
        )
        .mod("pelvic")
        .mod("genitourinary")
)