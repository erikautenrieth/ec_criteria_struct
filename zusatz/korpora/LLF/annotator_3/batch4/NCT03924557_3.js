'INC'

'-  Life expectancy must be greater than 6 months'

'-  obs("Life expectancy") must be eq(op(GT), val("6"), temporal_unit(MONTH))'

obs("Life expectancy")
    .num_filter(
        eq(op(GT), val("6"), temporal_unit(MONTH))
    )
