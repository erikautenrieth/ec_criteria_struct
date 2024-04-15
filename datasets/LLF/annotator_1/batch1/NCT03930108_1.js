'INC'

'adult patients ( age 18 and above ) who admitted to burn unit during sampling period'

'adult() patients ( eq(op(GTEQ),val("18")) ) who enc(INPATIENT) to loc(unit("burn unit")) during sampling period'

intersect(
    adult()
        .equiv(
            age().num_filter(eq(op(GTEQ), val("18")))
        ),
    enc(INPATIENT)
        .loc(unit("burn unit"))
)