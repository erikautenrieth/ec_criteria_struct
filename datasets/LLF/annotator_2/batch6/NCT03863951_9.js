'EXC'

'-  a previous history of neurological illness including AD and PD ,'

'-  a eq(temporal_per(PAST)) of cond("neurological illness") including cond("AD") and cond("PD") ,'

cond("neurological illness")
    .temporality(
        eq(temporal_per(PAST))
    )
    .equiv(
        cond("AD"),
        cond("PD")
    )