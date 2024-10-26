'EXC'

'10.  Starting antimalarial medicine after enrolling in the study .  Subjects who are already on a stable dose of antimalarial before enrollment , may continue the same dose .'

'10.  eq(temporal_per(PRESENT)) drug("antimalarial medicine") after enrolling in the study .  Subjects who are eq(temporal_per(PAST)) on a stable() dose of drug("antimalarial") before enrollment , may continue the same dose .'

union(
    drug("antimalarial medicine")
        .temporality(
            eq(temporal_per(PRESENT))
        ),
    drug("antimalarial")
        .temporality(
            eq(temporal_per(PAST))
        )
        .stable()
)