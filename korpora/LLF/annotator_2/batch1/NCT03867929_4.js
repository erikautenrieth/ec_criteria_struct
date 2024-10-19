'EXC'

'-  Presence of uncontrolled hypertension ,'

'-  eq(temporal_per(PRESENT)) of mod("uncontrolled") cond("hypertension") ,'

cond("hypertension")
    .temporality(
        eq(temporal_per(PRESENT))
    )
    .mod("uncontrolled")