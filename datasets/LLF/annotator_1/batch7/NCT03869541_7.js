'EXC'

'-  Any patient where mobilization is contraindicated by the nature of their existing injuries .'

'-  Any patient where proc("mobilization") is contraindication() by the nature of their eq(temporal_per(PRESENT)) cond("injuries") .'

contraindication(
    proc("mobilization")
)
.caused_by(
    cond("injuries")
        .temporality(
            eq(temporal_per(PRESENT))
        )
)