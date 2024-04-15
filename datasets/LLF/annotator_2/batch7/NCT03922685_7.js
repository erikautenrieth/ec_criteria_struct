'INC'

'-  weight - stable during past 6 months'

'-  vital("weight") - stable() during eq(temporal_per(PAST), val("6"), temporal_unit(MONTH))'

vital("weight")
    .stable()
    .temporality(
        eq(temporal_per(PAST), val("6"), temporal_unit(MONTH))
    )