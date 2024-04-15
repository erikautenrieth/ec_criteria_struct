'EXC'

'-  Receiving anticoagulant treatment'

'-  eq(temporal_per(PRESENT)) drug("anticoagulant") proc()'


intersect(
    drug("anticoagulant"),
    proc()
)
    .temporality(
        eq(temporal_per(PRESENT))
    )

