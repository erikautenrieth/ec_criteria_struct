'INC'

'-  Male or female ≥ 18 years'

'-  male() or female() eq(op(GTEQ), val("18"), temporal_unit(YEAR))'

intersect(
    union(
        male(),
        female()
    ),
    age()
        .num_filter(
            eq(op(GTEQ), val("18"), temporal_unit(YEAR))
        )
)