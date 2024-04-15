'INC'

'Men and women aged ≥ 18 year - old'

'male() and female() age() eq(op(GT), val("18"), temporal_unit(YEAR))'

intersect(
    union(
        male(),
        female()
    ),
    age()
        .num_filter(
            eq(op(GT), val("18"), temporal_unit(YEAR))
        )
)