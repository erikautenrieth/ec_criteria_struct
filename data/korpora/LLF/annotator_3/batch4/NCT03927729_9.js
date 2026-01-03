'EXC'

'-  Consciousness disorder with Glasgow score < 15'

'-  cond("Consciousness disorder") with clin_score("Glasgow score") eq(op(LT), val("15"))'

intersect(
    cond("Consciousness disorder"),
    clin_score("Glasgow score")
        .num_filter(
            eq(op(LT), val("15"))
        )
)
