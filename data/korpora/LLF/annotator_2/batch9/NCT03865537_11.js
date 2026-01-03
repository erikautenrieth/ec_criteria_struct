'EXC'

'-  Inadequate bowel preparation ( Boston Bowel Prep Scale , total score ≤ 2 )'

'-  cond("Inadequate bowel preparation") ( clin_score("Boston Bowel Prep Scale") , total score eq(op(LTEQ), val("2")) )'

cond("Inadequate bowel preparation")
    .equiv(
        clin_score("Boston Bowel Prep Scale")
            .num_filter(
                eq(op(LTEQ), val("2"))
            )
    )