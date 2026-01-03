'INC'

'-  Healthy adult men or women who are not pregnant or planning to become pregnant during study duration aged 18 to 55 years .'

'-  Healthy adult() male() or female() who are not pregnant or planning to become pregnant during study duration age() eq(val("18"), op(BETWEEN), val("55"), temporal_unit(YEAR)) .'

intersect(
    adult(),
    union(
        male(),
        female()
    ),
    age()
        .num_filter(
            eq(val("18"), op(BETWEEN), val("55"), temporal_unit(YEAR))
        )
)