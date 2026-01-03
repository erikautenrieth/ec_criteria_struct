'INC'

'-  According to RECIST 1.1 criteria , there is at least 1 measurable lesion that has not been previously irradiated .'

'-  According to RECIST 1.1 criteria , there is eq(op(GTEQ), val("1")) measurable obs("lesion") that has neg() been eq(temporal_per(PAST)) proc("irradiated") .'


intersect(
    obs("lesion")
        .min_count(
            eq(op(GTEQ), val("1"))
        ),
    neg(
        proc("irradiated")
            .temporality(
                eq(temporal_per(PAST))
            )
    )
)
