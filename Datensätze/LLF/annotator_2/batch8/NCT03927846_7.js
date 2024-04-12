'EXC'

'1.  planned elective surgery during the study period ;'

'1.  eq(temporal_per(FUTURE)) elective proc("surgery") during the study period ;'

proc("surgery")
    .temporality(
        eq(temporal_per(FUTURE))
    )