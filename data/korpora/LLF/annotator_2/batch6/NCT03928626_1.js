'INC'

'1.  Adults ages 18 - 25'

'1.  adult() age() eq(val("18"), op(BETWEEN), val("25"))'

intersect(
    adult(),
    age()
        .num_filter(
            eq(val("18"), op(BETWEEN), val("25"))
        )
)