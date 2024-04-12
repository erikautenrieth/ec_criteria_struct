'EXC'

'-  Not participating in one or more of the eye examination or physiotherapy assessments'

'-  neg() eq(temporal_per(PAST)) in eq(val("one"), op(GTEQ)) of the proc("eye examination") or proc("physiotherapy assessments")'

neg(
    union(
        proc("eye examination"),
        proc("physiotherapy assessments")
    )
        .temporality(
            eq(temporal_per(PAST))
        )
        .min_count(
            eq(val("one"), op(GTEQ))
        )
)