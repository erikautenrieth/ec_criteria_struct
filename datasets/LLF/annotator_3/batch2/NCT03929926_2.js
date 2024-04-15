'INC'

'-  History of smoking ( current or former ) in the electronic health record ( EHR ) .'

'-  eq(temporal_per(PAST)) of obs("smoking") ( eq(temporal_per(PRESENT)) or eq(temporal_per(PAST)) ) in the electronic health record ( EHR ) .'

obs("smoking")
    .temporality(
        or(
            eq(temporal_per(PAST)),
            eq(temporal_per(PRESENT)),
            eq(temporal_per(PAST))
        )
    )