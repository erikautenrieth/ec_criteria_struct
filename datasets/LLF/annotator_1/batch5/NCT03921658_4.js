'INC'

'-  Treatment plan includes chemotherapy'

'-  proc() eq(temporal_per(FUTURE)) includes proc("chemotherapy")'

intersect(
    proc(),
    proc("chemotherapy")
)    
    .temporality(
        eq(temporal_per(FUTURE))
    )