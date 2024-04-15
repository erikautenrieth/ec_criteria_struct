'EXC'

'-  contraindications for tDCS ( e . g . , cardiac pacemaker , history of seizures , implanted metal inside the head ) ;'

'-  contraindication() for proc("tDCS") ( e . g . , cond("cardiac pacemaker") , eq(temporal_per(PAST)) of cond("seizures") , cond("implanted metal inside the head") ) ;'

contraindication(
    proc("tDCS")
)
.equiv(
    cond("cardiac pacemaker"),
    cond("seizures")
        .temporality(
            eq(temporal_per(PAST))
        ),
    cond("implanted metal inside the head")
)