'INC'

'-  Burn surface area > or = 5 % of the total body surface area'

'-  measurement("Burn surface area") eq(op(GTEQ), val("5"), unit("%")) of the total body surface area'

measurement("Burn surface area")
    .num_filter(
        eq(op(GTEQ), val("5"), unit("%"))
    )
