'EXC'

'-  History of renal or hepatic insufficiency'

'-  eq(temporal_per(PAST)) of mod("renal") or mod("hepatic") cond("insufficiency")'

cond("insufficiency")
    .temporality(
        eq(temporal_per(PAST))
    )
    .mod("renal")
    .mod("hepatic")