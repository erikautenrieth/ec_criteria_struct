'INC'

'-  Type 2 diabetes mellitus on metformin therapy for at least 3 months'

'-  mod("Type 2") cond("diabetes mellitus") on drug("metformin") proc("therapy") for eq(op(GTEQ), val("3"), temporal_unit(MONTH))'

intersect(
    cond("diabetes mellitus")
        .mod("Type 2"),
    intersect(
        drug("metformin"),
        proc("therapy")
    )
)
    .duration(
        eq(op(GTEQ), val("3"), temporal_unit(MONTH))
    )