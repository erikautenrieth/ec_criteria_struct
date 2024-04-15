'EXC'

'-  Participation in an interventional study with health products during the next 6 months'

'-  Participation in an interventional study with drug() during the eq(temporal_per(FUTURE), val("6"), temporal_unit(MONTH))'

drug()
    .temporality(
        eq(temporal_per(FUTURE), val("6"), temporal_unit(MONTH))
    )