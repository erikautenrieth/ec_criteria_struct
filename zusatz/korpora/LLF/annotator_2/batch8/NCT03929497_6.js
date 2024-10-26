'EXC'

'-  The patient has any current primary psychiatric disorder other than schizophrenia diagnosed during study 17972 A'

'-  The patient has any eq(temporal_per(PRESENT)) mod("primary") cond("psychiatric disorder") except() cond("schizophrenia") diagnosed during study 17972 A'

cond("psychiatric disorder")
    .temporality(
        eq(temporal_per(PRESENT))
    )
    .mod("primary")
    .except(
        cond("schizophrenia")
    )