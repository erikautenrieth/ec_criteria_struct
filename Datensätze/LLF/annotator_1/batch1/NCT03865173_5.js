'INC'

'-  Patient to be alive at the end of the acute management hospital stay'

'-  Patient to be alive at the eq(temporal_rec(MOST_RECENT_TIME)) of the mod("acute management") enc(INPATIENT)'

enc(INPATIENT)
    .mod("acute management")
    .temporality(
        eq(temporal_rec(MOST_RECENT_TIME))
    )