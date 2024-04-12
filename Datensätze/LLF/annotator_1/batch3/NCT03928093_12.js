'EXC'

'-  Medical conditions that would be considered as contraindications for pregabalin treatment ( ischemic heart disease , cardiac dysrhythmia , glaucoma , history of urinary retention )'

'-  cond() that would be be considered as contraindication() for drug("pregabalin") treatment ( cond("ischemic heart disease") , cond("cardiac dysrhythmia") , cond("glaucoma") , eq(temporal_per(PAST)) of cond("urinary retention") )'

cond()
    .equiv(
        contraindication(
            drug("pregabalin")
        ),
        cond("ischemic heart disease"), 
        cond("cardiac dysrhythmia"), 
        cond("glaucoma"), 
        cond("urinary retention")
            .temporality(
                eq(temporal_per(PAST))
            )
    )