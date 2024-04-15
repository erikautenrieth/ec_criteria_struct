'EXC'

'4.  Patients taking the contraindication of concomitant medications'

'4.  Patients eq(temporal_per(PRESENT)) the contraindication() of mod("concomitant") drug()'

contraindication(
    drug()
        .mod("concomitant"),
)
    .temporality(
        eq(temporal_per(PRESENT))
    )