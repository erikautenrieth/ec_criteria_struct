'EXC'

'-  taking medication that requires eating food before ( or with ) the medication; history of eating disorders;'

'-  eq(temporal_per(PRESENT)) drug() that indication() social_habit("eating food") before ( or with ) the drug(); eq(temporal_per(PAST)) of cond("eating disorders") ;'

union(
    intersect(
        drug()
            .temporality(
                eq(temporal_per(PRESENT))
            ),
        indication(
            seq(
                social_habit("eating food"),
                before(
                    drug()
                )
            )
        )
    ),
    cond("eating disorders")
        .temporality(
            eq(temporal_per(PAST))
        )
)