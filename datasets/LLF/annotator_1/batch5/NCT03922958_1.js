'INC'

'-  All adults undergoing cardiac surgery with CPB will be considered for enrollment .'

'-  All adult() eq(temporal_per(PRESENT)) proc("cardiac surgery") with proc("CPB") will be considered for enrollment .'

intersect(
    adult(), 
    seq(
        proc("cardiac surgery")
            .temporality(
                eq(temporal_per(PRESENT))
            ),
        proc("CPB")
    )
)