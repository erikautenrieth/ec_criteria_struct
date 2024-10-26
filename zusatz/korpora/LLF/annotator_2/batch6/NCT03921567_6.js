'EXC'

'-  History of chronic opioid intake'

'-  eq(temporal_per(PAST)) of chronic() drug("opioid") intake'

drug("opioid")
    .temporality(
        eq(temporal_per(PAST))
    )
    .chronic()