'EXC'

'Patients screened within the last year .  In addition , individuals who cannot speak English will be excluded from the study to minimize additional workload placed on administrative staff .'

'Patients proc("screened") eq(temporal_per(PAST), temporal_unit(YEAR)) .  In addition , individuals who neg() speak lang("English") will be neg() from the study to minimize additional workload placed on administrative staff .'

union(
    proc("screened")
        .temporality(
            eq(temporal_per(PAST), temporal_unit(YEAR))
        ),
    neg(
        lang("English")
    )
)
