'INC'

'-  Mini Mental State Examination score ≥ 24'

'-  clin_score("Mini Mental State Examination score") eq(op(GTEQ), val("24"))'

clin_score("Mini Mental State Examination score")
    .num_filter(
        eq(op(GTEQ), val("24"))
    )