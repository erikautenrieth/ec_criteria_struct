'EXC'

'-  Life expectancy < 3 months or in hospice care or nursing home'

'-  obs("Life expectancy") eq(op(LT), val("3"), temporal_unit(MONTH)) or in obs("hospice care") or obs("nursing home")'

union(
    obs("Life expectancy")
        .num_filter(
            eq(op(LT), val("3"), temporal_unit(MONTH))
        ),
    obs("hospice care"),
    obs("nursing home")
)