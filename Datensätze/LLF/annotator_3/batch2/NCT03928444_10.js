'EXC'

'-  History of intake of anti - aging systemic or topical medications within the previous 3 months .'

'-  eq(temporal_per(PAST)) of intake of mod("anti - aging systemic") or mod("topical") drug() eq(op(LTEQ), temporal_per(PAST), val("3"), temporal_unit(MONTH)) .'

drug()
    .temporality(
        eq(temporal_per(PAST))
    )
    .mod("anti - aging systemic")
    .mod("topical")
    .temporality(
        eq(op(LTEQ), temporal_per(PAST), val("3"), temporal_unit(MONTH))
    )