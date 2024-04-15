'EXC'

'-  at least one parent / caregiver who is a member of the focal tribe and at least one child , aged 12 - 18 living in the household'

'-  eq(op(GTEQ), val("one")) parent() / caregiver who is a member of the focal tribe and eq(op(GTEQ), val("one")) child() , age() eq(val("12"), op(BETWEEN), val("18")) living in the household'

intersect(
    parent()
        .min_count(
            eq(op(GTEQ), val("one"))
        ),
    intersect(
        child()
            .min_count(
                eq(op(GTEQ), val("one"))
            ),
        age()
            .num_filter(
                eq(val("12"), op(BETWEEN), val("18"))
            )
    )
)
