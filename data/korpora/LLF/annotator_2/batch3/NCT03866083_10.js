'EXC'

'-  Extremely moribund patients with an expected life expectancy of less than 24 hours'

'-  severity(SEVERE) risk(death()) patients with an expected obs("life expectancy") of eq(op(LT), val("24"), temporal_unit(HOUR))'

intersect(
    risk(death())
        .severity(SEVERE),
    obs("life expectancy")
        .num_filter(
            eq(op(LT), val("24"), temporal_unit(HOUR))
        )
)
