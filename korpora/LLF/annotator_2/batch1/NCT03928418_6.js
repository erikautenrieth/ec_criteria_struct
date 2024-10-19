'INC'

'-  Living within two hours travel time from the clinic ;'

'-  Living eq(op(LTEQ), val("two"), temporal_unit(HOUR)) measurement("travel time") from the clinic ;'

measurement("travel time")
    .num_filter(
        eq(op(LTEQ), val("two"), temporal_unit(HOUR))
    )