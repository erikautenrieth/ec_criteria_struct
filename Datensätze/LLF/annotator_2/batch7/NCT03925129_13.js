'EXC'

'-  Any opioid use during previous 30 days'

'-  Any drug("opioid") use during eq(temporal_per(PAST), val("30"), temporal_unit(DAY))'

drug("opioid")
    .temporality(
        eq(temporal_per(PAST), val("30"), temporal_unit(DAY))
    )