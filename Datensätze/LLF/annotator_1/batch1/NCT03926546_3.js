'INC'

'-  Participants have been given an assessment and received a diagnosis of OCD .'

'-  Participants have been eq(temporal_per(PAST)) an proc("assessment") and eq(temporal_per(PAST)) a diagnosis of cond("OCD") .'

intersect(
    proc("assessment")
        .temporality(
            eq(temporal_per(PAST))
        ), 
    cond("OCD")
        .temporality(
            eq(temporal_per(PAST))
        )
)