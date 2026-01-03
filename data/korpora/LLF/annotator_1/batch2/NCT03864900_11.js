'EXC'

'6.  hospitalized for AF in the past three months .'

'6.  enc(INPATIENT) for cond("AF") in the eq(temporal_per(PAST), val("three"), temporal_unit(MONTH)) .'

enc(INPATIENT)
    .for(
        cond("AF")
    )
    .temporality(
        eq(temporal_per(PAST), val("three"), temporal_unit(MONTH))
    )