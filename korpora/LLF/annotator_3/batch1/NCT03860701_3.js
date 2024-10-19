'INC'

'-  Gestational age < 36 weeks .'

'-  measurement("Gestational age") eq(op(LT), val("36"), temporal_unit(WEEK)) .'

measurement("Gestational age")
    .num_filter(
        eq(op(LT), val("36"), temporal_unit(WEEK))
    )
