'INC'

'-  Male and Female ; 18 years of age or older'

'-  male() and female() ; eq(val("18"), temporal_unit(YEAR), op(GTEQ))'

intersect(
    union(
        male(),
        female()
    ),
    age()
        .num_filter(
            eq(val("18"), temporal_unit(YEAR), op(GTEQ))
        )
)