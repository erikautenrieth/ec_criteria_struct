'EXC'

'-  non - surgical periodontal treatment during the last 6 months before the study ,'

'-  mod("non - surgical") proc("periodontal treatment") during the eq(temporal_per(PAST), val("6"), temporal_unit(MONTH)) before the study ,'

proc("periodontal treatment")
    .temporality(
        eq(temporal_per(PAST), val("6"), temporal_unit(MONTH))
    )
