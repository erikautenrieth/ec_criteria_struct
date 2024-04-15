'INC'

'-  > / = 5 days per week E - cig use for last 3 months'

'-  eq(op(GTEQ), val("5"), temporal_unit(DAY), per(WEEK)) drug("E - cig") use for eq(temporal_per(PAST), val("3"), temporal_unit(MONTH))'

drug("E - cig")
    .num_filter(
        eq(op(GTEQ), val("5"), temporal_unit(DAY), per(WEEK))
    )
    .duration(
        eq(temporal_per(PAST), val("3"), temporal_unit(MONTH))
    )