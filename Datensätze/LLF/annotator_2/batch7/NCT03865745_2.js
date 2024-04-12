'INC'

'Age of 40 ~ 75 men and women'

'age() of eq(val("40"), op(BETWEEN), val("75")) male() and female()'

intersect(
    age()
        .num_filter(
            eq(val("40"), op(BETWEEN), val("75"))
        ),
    union(
        male(),
        female()
    )
)