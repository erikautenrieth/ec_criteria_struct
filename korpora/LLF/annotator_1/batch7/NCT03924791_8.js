'EXC'

'-  Transforaminal epidural injection received in 6 months before randomization date'

'-  mod("Transforaminal") proc("epidural injection") eq(temporal_per(PAST), val("6"), temporal_unit(MONTH)) before study date'

proc("epidural injection")
    .mod("Transforaminal")
    .temporality(
        eq(temporal_per(PAST), val("6"), temporal_unit(MONTH))
    )