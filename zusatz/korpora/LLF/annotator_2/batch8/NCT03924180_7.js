'EXC'

'-  Participated in a clinical trial or trial to evaluate PKU foods or treatments in the last 7 days prior to inclusion or planned during the next 6 months'

'-  Participated in a clinical trial or  to evaluate cond("PKU") foods or proc() in the eq(temporal_per(PAST), val("7"), temporal_unit(DAY)) prior to inclusion or eq(temporal_per(FUTURE), val("6"), temporal_unit(MONTH))'

union(
    cond("PKU"),
    proc()
)
    .temporality(
        and(
            eq(temporal_per(PAST), val("7"), temporal_unit(DAY)),
            eq(temporal_per(FUTURE), val("6"), temporal_unit(MONTH))
        )
    )