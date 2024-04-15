'EXC'

'-  Contraindications or failure of neuraxial anesthesia'

'-  contraindication() or mod("failure") of proc("neuraxial anesthesia")'

union(
    contraindication(
        proc("neuraxial anesthesia")
    ),
    proc("neuraxial anesthesia")
        .mod("failure")
)