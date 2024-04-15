'INC'

'-  Male or female , age greater than or equal to 18 years at the time of signing informed consent'

'-  male() or female() , age() eq(op(GTEQ), val("18"), temporal_unit(YEAR)) at the time of signing informed consent'

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