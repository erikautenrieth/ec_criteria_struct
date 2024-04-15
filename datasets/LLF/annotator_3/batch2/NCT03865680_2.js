'INC'

'-  High caries risk children with the presence of at least one visible active WSL in primary teeth with ICDAS II score of 1 , 2 or 3'

'-  pol(HIGH) cond("caries") risk() child() with the presence of eq(op(GTEQ), val("one")) mod("visible") eq(temporal_per(PRESENT)) cond("WSL") in mod("primary teeth") with clin_score("ICDAS II score") of eq(val("1"), val("2"), val("3"))'

intersect(
    intersect(
        risk(
            cond("caries")
        )
            .pol(HIGH),
        child()
    ),
    cond("WSL")
        .min_count(
            eq(op(GTEQ), val("one"))
        )
        .mod("visible")
        .temporality(
            eq(temporal_per(PRESENT))
        )
        .mod("primary teeth"),
    clin_score("ICDAS II score")
        .num_filter(
            eq(val("1"), val("2"), val("3"))
        )
)
