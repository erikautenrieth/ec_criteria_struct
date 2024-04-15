'EXC'

'-  Primary anterior teeth in which carious lesions are scored with ICDAS ≥ 3.'

'-  mod("Primary anterior teeth") in which cond("carious lesions") are scored with clin_score("ICDAS") eq(op(GTEQ), val("3")).'

intersect(
    cond("carious lesions")
        .mod("Primary anterior teeth"),
    clin_score("ICDAS")
        .num_filter(
            eq(op(GTEQ), val("3"))
        )
)
