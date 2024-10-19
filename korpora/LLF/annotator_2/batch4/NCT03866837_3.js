'INC'

'-  mother ≥ 15 years of age'

'-  mother() eq(op(GTEQ), val("15"), temporal_unit(YEAR)) of age()'

intersect(
    mother(),
    age()
        .num_filter(
            eq(op(GTEQ), val("15"), temporal_unit(YEAR))
        )
)