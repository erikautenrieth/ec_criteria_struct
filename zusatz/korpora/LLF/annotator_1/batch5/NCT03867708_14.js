'EXC'

'-  ASD with severe pulmonary arterial hypertension and bidirectional or right - to - left shunting .'

'-  cond("ASD") with severity(SEVERE) cond("pulmonary arterial hypertension") and mod("bidirectional") or mod("right - to - left") cond("shunting") .'

intersect(
    cond("ASD")
        .severity(SEVERE),
    cond("pulmonary arterial hypertension"),
    cond("shunting")
        .mod(
            or("bidirectional", "right - to - left")
        )
    )