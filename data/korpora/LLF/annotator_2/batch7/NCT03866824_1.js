'INC'

'Men and women aged 20 - 80'

'male() and female() age() eq(val("20"), op(BETWEEN), val("80"))'

intersect(
    union(
        male(),
        female()
    ),
    age()
        .num_filter(
            eq(val("20"), op(BETWEEN), val("80"))
        )
)