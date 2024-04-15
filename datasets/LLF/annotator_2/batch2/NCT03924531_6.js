'EXC'

'-  Current substance abuse disorder ( i . e . , drugs , alcohol ) .'

'-  eq(temporal_per(PRESENT)) cond("substance abuse disorder") ( i . e . , drug("drugs") , drug("alcohol") ) .'

cond("substance abuse disorder")
    .temporality(
        eq(temporal_per(PRESENT))
    )
    .equiv(
        drug("drugs"),
        drug("alcohol")
    )
