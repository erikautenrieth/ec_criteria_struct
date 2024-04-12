'EXC'

'-  Women who are currently using probiotics by any route of administration'

'-  female() who are eq(temporal_per(PRESENT)) drug("probiotics") by any route of administration'

intersect(
    female(),
    drug("probiotics")
        .temporality(
            eq(temporal_per(PRESENT))
        )
)