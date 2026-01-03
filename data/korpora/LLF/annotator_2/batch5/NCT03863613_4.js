'INC'

'-  Cervical length ≤ 28 mm'

'-  measurement("Cervical length") eq(op(LTEQ), val("28"), unit("mm"))'

measurement("Cervical length")
    .num_filter(
        eq(op(LTEQ), val("28"), unit("mm"))
    )