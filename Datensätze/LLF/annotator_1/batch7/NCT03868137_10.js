'EXC'

'-  Contraindications to NSAIDs ( allergy , history of asthma , history of aspirin allergy , history of kidney disease , history of stomach ulcer , history of active GI bleeding , history of liver disease )'

'-  contraindication() to drug("NSAIDs") ( allergy() , eq(temporal_per(PAST)) of cond("asthma") , eq(temporal_per(PAST)) of drug("aspirin") allergy() , eq(temporal_per(PAST)) of cond("kidney disease") , eq(temporal_per(PAST)) of cond("stomach ulcer") , eq(temporal_per(PAST)) of eq(temporal_per(PRESENT)) obs("GI bleeding") , eq(temporal_per(PAST)) of cond("liver disease") )'

contraindication(
    drug("NSAIDs")
)
.equiv(
    allergy(
        drug("NSAIDs")
    ),
    cond("asthma")
        .temporality(
            eq(temporal_per(PAST))
        ),
    allergy(
        drug("aspirin")
    )
        .temporality(
            eq(temporal_per(PAST))
        ),
    cond("kidney disease")
        .temporality(
            eq(temporal_per(PAST))
        ),
    cond("stomach ulcer")
        .temporality(
            eq(temporal_per(PAST))
        ),
    obs("GI bleeding")
        .temporality(
            or(
                eq(temporal_per(PAST)),
                eq(temporal_per(PRESENT))
            )
        ),
    cond("liver disease")
        .temporality(
            eq(temporal_per(PAST))
        )
)