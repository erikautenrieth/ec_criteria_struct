'EXC'

'-  Relevant cancer or other serious disease with expected survival < 5 years'

'-  Relevant cond("cancer") or other severity(SEVERE) cond() with obs("expected survival") eq(op(LT), val("5"), temporal_unit(YEAR))'

intersect(
    union(
        cond("cancer"), 
        cond()
            .severity(SEVERE)
    ),
    obs("expected survival")
        .num_filter(
            eq(op(LT), val("5"), temporal_unit(YEAR))
        )
)