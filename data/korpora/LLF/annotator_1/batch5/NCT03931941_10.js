'EXC'

'3.  Fecal microbiota transplant ( FMT ) within the past 6 months .'

'3.  proc("Fecal microbiota transplant") ( proc("FMT") ) eq(temporal_per(PAST), val("6"), temporal_unit(MONTH)) .'

proc("Fecal microbiota transplant")
    .equiv(
        proc("FMT")
    )
    .temporality(
        eq(temporal_per(PAST), val("6"), temporal_unit(MONTH))
    )