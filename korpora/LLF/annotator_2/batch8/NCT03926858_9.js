'EXC'

'-  Admitted to ICU after surgery'

'-  enc(INPATIENT) to loc(unit("ICU")) after proc("surgery")'

seq(
    enc(INPATIENT)
        .loc(unit("ICU")),
    after(
        proc("surgery")
    )
)