'INC'

'-  Stable maintenance subcutaneous ESA therapy with constant dose interval during the last 2 months ,'

'-  stable() maintenance mod("subcutaneous") proc("ESA therapy") with constant dose interval during the eq(temporal_per(PAST), val("2"), temporal_unit(MONTH)) ,'

proc("ESA therapy")
    .stable()
    .mod("subcutaneous")
    .temporality(
        eq(temporal_per(PAST), val("2"), temporal_unit(MONTH))
    )