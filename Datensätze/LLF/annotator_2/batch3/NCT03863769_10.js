'INC'

'-  Able to stand and walk without assistive devices for at least 20 minutes'

'-  cond("Able to") mod("stand") and mod("walk") neg() proc("assistive devices") for eq(op(GTEQ), val("20"), temporal_unit(MINUTE))'

intersect(
    cond("Able to")
        .mod("stand")
        .mod("walk"),
    neg(
        proc("assistive devices")
            .duration(
                eq(op(GTEQ), val("20"), temporal_unit(MINUTE))
            )
    )
)
