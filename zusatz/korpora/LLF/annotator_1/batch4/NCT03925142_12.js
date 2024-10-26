'INC'

'-  Not drinking more than 2 alcoholic drinks per day'

'-  neg() social_habit("drinking") eq(op(GT), val("2"), unit("alcoholic drinks"), per(DAY))'

neg(
    social_habit("drinking")
        .num_filter(
            eq(op(GT), val("2"), unit("alcoholic drinks"), per(DAY))
        )
)