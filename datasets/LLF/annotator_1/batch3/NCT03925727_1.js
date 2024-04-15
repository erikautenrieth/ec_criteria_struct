'INC'

'-  Subject - reported history of dry eye disease in both eyes for at least 6 months;'

'-  Subject - reported eq(temporal_per(PAST)) of cond("dry eye disease") in mod("both eyes") for eq(op(GTEQ), val("6"), temporal_unit(MONTH)) ;'

cond("dry eye disease")
    .mod("both eyes")
    .temporality(
        eq(temporal_per(PAST))
    )
    .duration(
        eq(op(GTEQ), val("6"), temporal_unit(MONTH))
    )