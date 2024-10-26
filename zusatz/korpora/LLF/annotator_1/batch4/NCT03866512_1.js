'INC'

'-  Males and females 18 - 40 years of age'

'-  male() and female() eq(val("18"), op(BETWEEN), val("40"), temporal_unit(YEAR)) of age()'

intersect(
    union(
        male(), 
        female()
    ), 
    age()
        .num_filter(
            eq(val("18"), op(BETWEEN), val("40"), temporal_unit(YEAR))
        )
)