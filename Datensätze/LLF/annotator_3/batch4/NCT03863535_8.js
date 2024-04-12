'EXC'

'3.  major surgery within the prior 6 months or planned within the next 28 days ;'

'3.  severity(SEVERE) proc("surgery") eq(op(LTEQ), temporal_per(PAST), val("6"), temporal_unit(MONTH)) or eq(temporal_per(FUTURE), op(LTEQ), val("28"), temporal_unit(DAY)) ;'

proc("surgery")
    .severity(SEVERE)
    .temporality(
        eq(op(LTEQ), temporal_per(PAST), val("6"), temporal_unit(MONTH))
    )
    .temporality(
        eq(temporal_per(FUTURE), op(LTEQ), val("28"), temporal_unit(DAY))
    )

