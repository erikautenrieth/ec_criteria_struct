'INC'

'- Men and women from 18 to 65 years old'

'- male() and female() from eq(val("18"), op(BETWEEN), val("65")) age()'

intersect(
    union(
        male(),
        female()
    ),
    age()
        .num_filter(
            eq(val("18"), op(BETWEEN), val("65"))
        )
)
