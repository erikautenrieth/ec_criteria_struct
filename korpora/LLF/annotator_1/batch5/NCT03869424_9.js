'EXC'

'-  consumption of alcohol in the last twelve hours'

'-  consumption of drug("alcohol") in the eq(temporal_per(PAST), val("twelve"), temporal_unit(HOUR))'

drug("alcohol")
    .temporality(
        eq(temporal_per(PAST), val("twelve"), temporal_unit(HOUR))
    )