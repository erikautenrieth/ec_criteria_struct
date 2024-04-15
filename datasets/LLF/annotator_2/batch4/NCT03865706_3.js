'INC'

'3.  With sepsis as defined by the Sepsis - 3 ( 2016 ) consensus as a known or suspected infection with a SOFA score of ≥ 2 points above baseline'

'3.  With cond("sepsis") as defined by the Sepsis - 3 ( 2016 ) consensus as a mod("known") or possible() cond("infection") with a clin_score("SOFA score") of eq(op(GTEQ), val("2"), unit(REF_RANGE_NORMAL))'

cond("sepsis")
    .equiv(
        intersect(
            cond("infection")
                .mod("known")
                .possible(),
            clin_score("SOFA score")
                .num_filter(
                    eq(op(GTEQ), val("2"), unit(REF_RANGE_NORMAL))
                )
        )
    )