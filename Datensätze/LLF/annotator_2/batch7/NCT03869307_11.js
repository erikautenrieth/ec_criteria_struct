'EXC'

'-  Pregnancy or childbirth within the past year or planning to get pregnant during the study period'

'-  cond("Pregnancy") or cond("childbirth") eq(op(LTEQ), temporal_per(PAST), temporal_unit(YEAR)) or planning to get pregnant during the study period'

union(
    cond("Pregnancy"),
    cond("childbirth")    
)
    .temporality(
        eq(op(LTEQ), temporal_per(PAST), temporal_unit(YEAR))
    )