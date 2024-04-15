'EXC'

'-  Primary Care PTSD Screen for DSM - 5 for post - traumatic stress disorder score ≥ 10'

'-  loc(clin("Primary Care")) cond("PTSD") proc("Screen") for DSM - 5 for clin_score("post - traumatic stress disorder score") eq(op(GTEQ), val("10"))'

intersect(
    proc("Screen")
        .loc(clin("Primary Care"))
        .for(
            cond("PTSD")
        ),
    clin_score("post - traumatic stress disorder score")
        .num_filter(
            eq(op(GTEQ), val("10"))
        )
)