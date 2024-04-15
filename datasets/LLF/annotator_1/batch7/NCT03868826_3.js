'EXC'

'-  Conditions that contraindicate muscle strength testing e . g .  cancer and neurological conditions'

'-  cond() that contraindication() proc("muscle strength testing") e . g .  cond("cancer") and cond("neurological conditions")'

contraindication(
    proc("muscle strength testing")
)
.caused_by(
    cond()
        .equiv(
            cond("cancer"),
            cond("neurological conditions")
        )
)