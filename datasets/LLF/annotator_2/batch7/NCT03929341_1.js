'INC'

'- Men and women age ≥ 40 years of age'

'- male() and female() age() eq(op(GTEQ), val("40")) of age'

intersect(
    union(
        male(),
        female()
    ),
    age()
        .num_filter(
            eq(op(GTEQ), val("40"))
        )
)