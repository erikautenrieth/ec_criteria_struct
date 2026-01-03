'EXC'

'-  Subject\'s life expectancy was shorter than 6 months'

'-  Subject\'s obs("life expectancy") was eq(op(LT), val("6"), temporal_unit(MONTH))'

obs("life expectancy")
    .num_filter(
        eq(op(LT), val("6"), temporal_unit(MONTH))
    )
