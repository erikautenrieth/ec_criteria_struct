'EXC'

'-  Chronic disease with life expectancy less than 1 year'

'-  chronic() cond() with obs("life expectancy") eq(op(LT), val("1"), temporal_unit(YEAR))'

intersect(
    cond()
        .chronic(),
    obs("life expectancy")
        .duration(
            eq(op(LT), val("1"), temporal_unit(YEAR))
        )
)