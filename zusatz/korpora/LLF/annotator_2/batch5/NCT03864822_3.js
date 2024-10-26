'INC'

'-  Continuous pain ( > 3 days pain / week ) episode lasting at least 3 months , sufficient to limit daily activities'

'-  eq(temporal_per(PRESENT)) obs("pain") ( eq(op(GT), val("3"), temporal_unit(DAY), per(WEEK)) ) episode lasting eq(op(GTEQ), val("3"), temporal_unit(MONTH)) , sufficient to change() eq(per(DAY)) social_habit("activities")'

social_habit("activities")
    .change()
    .num_filter(
        eq(per(DAY))
    )
    .caused_by(
        obs("pain")
            .temporality(
                eq(temporal_per(PRESENT))
            )
            .num_filter(
                eq(op(GT), val("3"), temporal_unit(DAY), per(WEEK))
            )
            .duration(
                eq(op(GTEQ), val("3"), temporal_unit(MONTH))
            )
    )