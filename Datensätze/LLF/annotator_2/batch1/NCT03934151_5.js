'EXC'

'-  Patients operated in emergency'

'-  Patients proc("operated") in enc(EMERGENCY)'

seq(
    enc(EMERGENCY),
    during(
        proc("operated")
    )
)