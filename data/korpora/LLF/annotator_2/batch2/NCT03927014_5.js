'EXC'

'-  women with a history of drug use throughout pregnancy'

'-  female() with a eq(temporal_per(PAST)) of cond("drug use") throughout cond("pregnancy")'

intersect(
    female(),
    seq(
        cond("drug use")
            .temporality(
                eq(temporal_per(PAST))
            ),
        during(
            cond("pregnancy")
        )
    )
)