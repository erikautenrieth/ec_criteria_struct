'INC'

'-  Healthy male and female subjects ( aged 19 ~ 45 years at the time of screening )'

'-  cond("Healthy") male() and female() subjects ( age() eq(val("19"), op(BETWEEN), val("45"), temporal_unit(YEAR)) at the time of screening )'

intersect(
    intersect(
        cond("Healthy"),
        union(
            male(),
            female()
        )
    ),
    age()
        .num_filter(
            eq(val("19"), op(BETWEEN), val("45"), temporal_unit(YEAR))
        )
)