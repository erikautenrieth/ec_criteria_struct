'EXC'

'-  patient under chronic dialysis'

'-  patient eq(temporal_per(PRESENT)) chronic() proc("dialysis")'

proc("dialysis")
    .chronic()
    .temporality(
        eq(temporal_per(PRESENT))
    )