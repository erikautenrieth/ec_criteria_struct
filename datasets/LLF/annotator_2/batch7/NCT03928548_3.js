'INC'

'-  Receive initial nutrition care one day before study enrollment day'

'-  Receive eq(temporal_per(PRESENT)) proc("nutrition care") eq(val("one"), temporal_unit(DAY)) before study enrollment day'

proc("nutrition care")
    .temporality(
        eq(temporal_per(PRESENT))
    )
    .num_filter(
        eq(val("one"), temporal_unit(DAY))
    )