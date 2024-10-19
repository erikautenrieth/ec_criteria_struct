'EXC'

'-  Exercise intensely ( more than 10 hours per week )'

'-  obs("Exercise") severity(SEVERE) ( eq(op(GTEQ), val("10"), temporal_unit(HOUR), per(WEEK)) )'

obs("Exercise")
    .severity(SEVERE)
    .num_filter(
        eq(op(GTEQ), val("10"), temporal_unit(HOUR), per(WEEK))
    )