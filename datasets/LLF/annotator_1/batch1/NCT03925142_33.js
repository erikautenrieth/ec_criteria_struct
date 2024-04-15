'EXC'

'-  Have cardiovascular events ( myocardial infarction or stroke ) during the 6 months prior to the study'

'-  Have cond("cardiovascular events") ( cond("myocardial infarction") or cond("stroke") ) during the eq(val("6"), temporal_unit(MONTH), temporal_per(PAST)) to the study'

cond("cardiovascular events")
    .equiv(
        cond("myocardial infarction"),
        cond("stroke")
    )
    .temporality(
        eq(val("6"), temporal_unit(MONTH), temporal_per(PAST))
    )