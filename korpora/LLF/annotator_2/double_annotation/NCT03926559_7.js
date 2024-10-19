'EXC'

'-  Women with history of polysubstance abuse / narcotic abuse'

'-  female() with eq(temporal_per(PAST)) of cond("polysubstance abuse") / cond("narcotic abuse")'

intersect(
    female(),
    union(
        cond("polysubstance abuse"),
        cond("narcotic abuse")
    )
        .temporality(
            eq(temporal_per(PAST))
        )
)