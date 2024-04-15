'EXC'

'-  History of drug or alcohol abuse'

'-  eq(temporal_per(PAST)) of mod("drug") or mod("alcohol") cond("abuse")'

cond("abuse")
    .temporality(
        eq(temporal_per(PAST))
    )    
    .mod("drug")
    .mod("alcohol")