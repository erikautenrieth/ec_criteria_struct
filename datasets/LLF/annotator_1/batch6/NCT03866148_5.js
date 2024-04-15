'EXC'

'-  Patients with an ILR already in - situ or an established indication for ILR'

'-  Patients with an proc("ILR") eq(temporal_per(PAST)) mod("in - situ") or an established contraindication() for proc("ILR")'

union(
    proc("ILR")
        .temporality(
            eq(temporal_per(PAST))
        ), 
    contraindication(
        proc("ILR")
    )
)