'INC'

'-  UAS 7 score ( range 0 - 42 ) ≥ 16 and HSS 7 score ( range 0 - 21 ) ≥ 8 during 7 days prior to randomization ( Day 1 )'

'-  clin_score("UAS 7 score") ( range eq(val("0"), op(BETWEEN), val("42")) ) eq(op(GTEQ), val("16")) and clin_score("HSS 7 score") ( range eq(val("0"), op(BETWEEN), val("21")) ) eq(op(GTEQ), val("8")) during eq(val("7"), temporal_unit(DAY)) prior to randomization ( Day 1 )'

intersect(
    clin_score("UAS 7 score")
        .num_filter(
            and(
                eq(val("0"), op(BETWEEN), val("42")),
                eq(op(GTEQ), val("16"))
            )
        ),
    clin_score("HSS 7 score")
        .num_filter(
            and(
                eq(val("0"), op(BETWEEN), val("21")),
                eq(op(GTEQ), val("8"))
            )
        )
)
    .temporality(
        eq(val("7"), temporal_unit(DAY))
    )