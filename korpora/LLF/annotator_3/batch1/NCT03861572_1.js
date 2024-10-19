'INC'

'-  Participants will be male and female subjects who suffered total acute Achilles tendon rupture , and which underwent surgical repair .  In addition , to participate in this study all volunteers will need to present medical and / or physiotherapeutic release for physical / sports activities practice .'

'-  Participants will be male() and female() subjects who eq(temporal_per(PAST)) mod("total") acute() cond("Achilles tendon rupture") , and which eq(temporal_per(PAST)) proc("surgical repair") .  In addition , to participate in this study all volunteers will need to present medical and / or physiotherapeutic release for physical / sports activities practice .'

intersect(
    union(
        male(),
        female()
    ),
    proc("surgical repair")
        .temporality(
            eq(temporal_per(PAST))
        )
        .for(
            cond("Achilles tendon rupture")
                .temporality(
                    eq(temporal_per(PAST))
                )
                .mod("total")
                .acute()
        )
)
