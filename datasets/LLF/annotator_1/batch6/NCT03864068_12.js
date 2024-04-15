'EXC'

'-  Women with medical conditions that are contraindications to OTC inositol or previous allergic reactions to the supplement or to the placebo maltodextrin or insulin .'

'-  female() with cond() that are contraindication() to drug("OTC inositol") or eq(temporal_per(PAST)) allergy() to the drug("supplement") or to the drug("placebo maltodextrin") or drug("insulin") .'

intersect(
    female(), 
    union(
        contraindication(
            drug("OTC inositol")
        ),
        allergy(
            drug("supplement"),
            drug("placebo maltodextrin"),
            drug("insulin")
        )
            .temporality(
                eq(temporal_per(PAST))
            )
    )
        .caused_by(
            cond()
        )
)