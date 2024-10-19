'EXC'

'-  Suicide risk or very likely to require psychiatric hospitalisation'

'-  cond("Suicide") risk() or very likely to indication() cond("psychiatric") enc(INPATIENT)'

union(
    risk(
        cond("Suicide")
    ),
    indication(
        enc(INPATIENT)
            .for(
                cond("psychiatric")
            )
    )
)
