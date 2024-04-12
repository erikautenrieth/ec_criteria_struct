'EXC'

'-  Children , adults under 21 years of age , and pregnant women'

'-  child() , adult() eq(op(LT), val("21"), temporal_unit(YEAR)) of age() , and cond("pregnant") female()'

union(
    intersect(
        union(
            child(),
            adult()
        ),
        age()
            .num_filter(
                eq(op(LT), val("21"), temporal_unit(YEAR))
            )
    ),
    intersect(
        cond("pregnant"),
        female()
    )
)

