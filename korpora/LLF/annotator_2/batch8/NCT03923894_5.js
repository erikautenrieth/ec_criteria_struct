'EXC'

'-  Those who received influenza vaccination within 3 months before the screening'

'-  Those who eq(temporal_per(PAST)) immune("influenza vaccination") eq(op(LTEQ), val("3"), temporal_unit(MONTH)) before the screening'

immune("influenza vaccination")
    .temporality(
        and(
            eq(temporal_per(PAST)),
            eq(op(LTEQ), val("3"), temporal_unit(MONTH)) 
        )
    )