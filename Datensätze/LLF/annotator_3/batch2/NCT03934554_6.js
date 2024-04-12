'EXC'

'-  Patient having a pathology with a life expectancy of less than two years'

'-  Patient eq(temporal_per(PRESENT)) a cond("pathology") with a obs("life expectancy") of eq(op(LT), unit("two"), temporal_unit(YEAR))'

intersect(
    cond("pathology")
        .temporality(
            eq(temporal_per(PRESENT))
        ),
    obs("life expectancy")
        .num_filter(
            eq(op(LT), unit("two"), temporal_unit(YEAR))
        )
)
