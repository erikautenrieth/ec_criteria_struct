'INC'

'-  Patients scheduled for elective knee arthroscopy .'

'-  Patients eq(temporal_per(FUTURE)) for mod("elective knee") proc("arthroscopy") .'

proc("arthroscopy")
    .temporality(
        eq(temporal_per(FUTURE))
    )
    .mod("elective knee")