'INC'

'-  Men and women aged 18 - 70 years'

'-  male() and female() age() eq(val("18"), op(BETWEEN), val("70"), temporal_unit(YEAR))'

intersect(
    union(
        male(),
        female()
    ),
    age()
        .num_filter(
            eq(val("18"), op(BETWEEN), val("70"), temporal_unit(YEAR))
        )
)