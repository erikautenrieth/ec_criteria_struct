'INC'

'- Adult men and women over 50 years'

'- adult() male() and female() eq(op(GT), val("50"), temporal_unit(YEAR))'

intersect(
    adult(),
    union(
        male(),
        female()
    ),
    age()
        .num_filter(
            eq(op(GT), val("50"), temporal_unit(YEAR))
        )
)