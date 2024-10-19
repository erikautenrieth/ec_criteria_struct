'EXC'

'-  Women < 18 years old'

'-  female() eq(op(LT), val("18"), temporal_unit(YEAR)) age()'

intersect(
    female(),
    age()
        .num_filter(
            eq(op(LT), val("18"), temporal_unit(YEAR))
        )
)
