'EXC'

'-  History of upper airway pathology ( tumor , cleft palate - lips , etc . )'

'-  eq(temporal_per(PAST)) of cond("upper airway pathology") ( cond("tumor") , cond("cleft palate - lips") , etc . )'

cond("upper airway pathology")
    .temporality(
        eq(temporal_per(PAST))
    )
    .equiv(
        union(
            cond("tumor"),
            cond("cleft palate - lips")
        )
    )