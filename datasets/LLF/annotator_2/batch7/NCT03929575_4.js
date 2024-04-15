'INC'

'-  Regular participation in physical activity ( > 4 hours per week )'

'-  Regular participation in social_habit("physical activity") ( eq(op(GT), val("4"), temporal_unit(HOUR), per(WEEK)) )'

social_habit("physical activity")
    .num_filter(
        eq(op(GT), val("4"), temporal_unit(HOUR), per(WEEK))
    )