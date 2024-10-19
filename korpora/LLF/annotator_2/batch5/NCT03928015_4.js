'INC'

'4.  Baseline pain assessed at screening of ≥ 5 on the pain numeric rating score ( NRS )'

'4.  Baseline obs("pain") assessed at screening of eq(op(GTEQ), val("5")) on the clin_score("pain numeric rating score") ( obs("NRS") )'

obs("pain")
    .equiv(
        clin_score("pain numeric rating score")
            .num_filter(
                eq(op(GTEQ), val("5"))
            )
            .equiv(
                obs("NRS")
            )
    )