'EXC'

'-  Blood pressure systolic ≥ 140 or < 100 mmHg ; Blood pressure diastolic > 90 mmHg'

'-  vital("Blood pressure systolic") eq(op(GTEQ), val("140")) or eq(op(LT), val("100"), unit("mmHg")) ; vital("Blood pressure diastolic") eq(op(GT), val("90"), unit("mmHg"))'

intersect(
    vital("Blood pressure systolic")
        .num_filter(
            or(
                eq(op(GTEQ), val("140")),
                eq(op(LT), val("100"), unit("mmHg"))
            )   
        ),
    vital("Blood pressure diastolic")
        .num_filter(
            eq(op(GT), val("90"), unit("mmHg"))
        )
)
