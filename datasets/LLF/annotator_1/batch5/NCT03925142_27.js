'EXC'

'-  Medication use unstable for 6 months prior and using medications'

'-  drug() use change() for eq(val("6"), temporal_unit(MONTH), temporal_per(PAST)) and eq(temporal_per(PRESENT)) drug()'

intersect(
    drug()
        .change()
        .temporality(
            eq(val("6"), temporal_unit(MONTH), temporal_per(PAST))
        ), 
    drug()
        .temporality(
            eq(temporal_per(PRESENT))
        )
)