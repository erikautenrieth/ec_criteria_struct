'EXC'

'-  Current or history of use of illegal substances and gambling ;'

'-  eq(temporal_per(PRESENT)) or eq(temporal_per(PAST)) of use of drug("illegal substances") and social_habit("gambling") ;'

intersect(
    drug("illegal substances"),
    social_habit("gambling")
)
    .temporality(
        or(
            eq(temporal_per(PRESENT)),
            eq(temporal_per(PAST))
        )
    )