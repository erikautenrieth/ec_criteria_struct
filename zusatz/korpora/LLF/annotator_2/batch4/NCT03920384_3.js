'INC'

'-  Are experiencing delusions ( A score of ≥ 3 on PANSS item P 1 , P 5 or P 6 )'

'-  Are eq(temporal_per(PRESENT)) cond("delusions") ( A eq(unit("score"), op(GTEQ), val("3")) on obs("PANSS") item mod("P 1") , mod("P 5") or mod("P 6") )'

cond("delusions")
    .temporality(
        eq(temporal_per(PRESENT))
    )
    .equiv(
        obs("PANSS")
            .num_filter(
                eq(unit("score"), op(GTEQ), val("3"))
            )
            .mod("P 1")
            .mod("P 5")
            .mod("P 6")
    )