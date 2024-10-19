'EXC'

'4.  Any surgery during last 6 month'

'4.  Any proc("surgery") during eq(temporal_per(PAST), val("6"), temporal_unit(MONTH))'

proc("surgery")
    .temporality(
        eq(temporal_per(PAST), val("6"), temporal_unit(MONTH))
    )