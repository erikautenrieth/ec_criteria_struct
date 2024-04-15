'INC'

'-  Men and women aged 18 - 65'

'-  male() and female() age() eq(val("18"), op(BETWEEN), val("65"))'

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