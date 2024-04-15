'INC'

'-  Previous Gastric Bypass Surgery lead to less than 50 % of excess weight lost by 2 years after surgery'

'-  eq(temporal_per(PAST)) proc("Gastric Bypass Surgery") lead to eq(op(LT), val("50"), unit("%")) of measurement("excess weight") change() by eq(val("2"), temporal_unit(YEAR)) after surgery'

measurement("excess weight")
    .num_filter(
        eq(op(LT), val("50"), unit("%"))
    )
    .change()
    .temporality(
        eq(val("2"), temporal_unit(YEAR))
    )
    .caused_by(
        proc("Gastric Bypass Surgery")
            .temporality(
                eq(temporal_per(PAST))
            )
    )