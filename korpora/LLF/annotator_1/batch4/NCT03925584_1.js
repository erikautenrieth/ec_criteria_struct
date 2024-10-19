'INC'

'-  Greater than 37 weeks gestation ,'

'-  eq(op(GT), val("37"), temporal_unit(WEEK)) measurement("gestation") ,'

measurement("gestation")
    .num_filter(
        eq(op(GT), val("37"), temporal_unit(WEEK))
    )