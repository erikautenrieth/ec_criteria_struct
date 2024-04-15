'EXC'

'-  Alcohol consumption ( > 2 drinks per day )'

'-  social_habit("Alcohol consumption") ( eq(op(GT), val("2"), unit("drinks"), per(DAY)) )'

social_habit("Alcohol consumption")
    .num_filter(
        eq(op(GT), val("2"), unit("drinks"), per(DAY))
    )