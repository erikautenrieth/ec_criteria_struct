'EXC'

'-  Typically drinks > 6 caffeinated drinks per day'

'-  Typically social_habit("drinks") eq(op(GT), val("6"), unit("caffeinated drinks"), per(DAY))'

social_habit("drinks")
    .num_filter(
        eq(op(GT), val("6"), unit("caffeinated drinks"), per(DAY))
    )