'INC'

'-  present at least one of the following symptoms during the preceding two weeks : sleep problems , fatigue , pain , anxiety or symptoms of depression ;'

'-  present eq(op(GTEQ), val("one")) of criteria() during the eq(temporal_per(PAST), val("2"), temporal_unit(WEEK)) : cond("sleep problems") , cond("fatigue") , obs("pain") , cond("anxiety") or possible() of cond("depression") ;'

criteria(
    cond("sleep problems"),
    cond("fatigue"),
    obs("pain"),
    cond("anxiety"),
    cond("depression")
        .possible()
)
    .min_count(
        eq(op(GTEQ), val("one"))
    )
    .temporality(
        eq(temporal_per(PAST), val("2"), temporal_unit(WEEK))
    )