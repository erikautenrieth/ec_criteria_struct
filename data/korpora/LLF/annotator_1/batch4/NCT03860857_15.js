'EXC'

'8.  PET contraindications , e . g .  significant prior radiation exposure and pregnancy .'

'8.  proc("PET") contraindication() , e . g .  severity(SEVERE) eq(temporal_per(PAST)) cond("radiation exposure") and cond("pregnancy") .'

contraindication(
    proc("PET")
)
.equiv(
    cond("radiation exposure")
        .severity(SEVERE)
        .temporality(
            eq(temporal_per(PAST))
        ),
    cond("pregnancy")
)