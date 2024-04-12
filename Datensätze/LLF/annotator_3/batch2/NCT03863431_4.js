'INC'

'-  Physically active ( > 3 x 30 min moderate exercise per week )'

'-  social_habit("Physically active") ( eq(op(GT), val("3")) x eq(val("30"), temporal_unit(MINUTE), per(WEEK)) )'

social_habit("Physically active")
    .num_filter(
        eq(op(GT), val("3"))
    )
    .temporality()(
        eq(val("30"), temporal_unit(MINUTE), per(WEEK))
    )

