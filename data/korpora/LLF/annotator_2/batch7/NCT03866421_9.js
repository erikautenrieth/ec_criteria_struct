'INC'

'-  Daily alcohol intake above 20 g and 30 g for women and men respectively OR'

'-  eq(per(DAY)) social_habit("alcohol intake") eq(op(GT), val("20"), unit("g")) and eq(val("30"), unit("g")) for female() and male() respectively OR'

union(
    if_then(
        female(),
        social_habit("alcohol intake")
            .temporality(
                eq(per(DAY))
            )
            .num_filter(
                eq(op(GT), val("20"), unit("g"))
            )
    ),
    if_then(
        male(),
        social_habit("alcohol intake")
            .temporality(
                eq(per(DAY))
            )
            .num_filter(
                eq(val("30"), unit("g"))
            )
    )
)