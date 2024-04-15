'EXC'

'-  History of upper airway pathology ( tumor , cleft palate - lips , etc . )'

'-  eq(temporal_per(PAST)) of cond("upper airway pathology") ( cond("tumor") , cond("cleft palate - lips") , etc . )'


cond("upper airway pathology")
    .equiv(
        union(
            cond("tumor"),
            cond("cleft palate - lips")
        )
    )
    .num_filter(eq(temporal_per(PAST)))