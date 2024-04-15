'INC'

'-  All pregnant women undergoing a C / S in on the hospitals during the study period will be eligible to participate in this study .'

'-  All cond("pregnant") female() eq(temporal_per(PRESENT)) a proc("C / S") in on the hospitals during the study period will be eligible to participate in this study .'

intersect(
    cond("pregnant"),
    female(),
    proc("C / S")
        .temporality(
            eq(temporal_per(PRESENT))
        )
)