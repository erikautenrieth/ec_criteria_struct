'EXC'

'-  open head injury or closed head injury with loss of consciousness > 1 min for all subjects'

'-  mod("open head") obs("injury") or mod("closed head") obs("injury") with cond("loss of consciousness") eq(op(GT), val("1"), temporal_unit(MINUTE)) for all subjects'

intersect(
    cond("loss of consciousness")
        .temporality(
            eq(op(GT), val("1"), temporal_unit(MINUTE))
        ),
    union(
        obs("injury")
            .mod("open head"),
        obs("injury")
            .mod("closed head")
    )
)        