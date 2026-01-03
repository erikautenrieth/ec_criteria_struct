'EXC'

'-  Unstable body mass ( ± 2 kg over prior 3 - mo )'

'-  change() vital("body mass") ( eq(op(PLUS_MINUS), val("2"), unit("kg")) over eq(temporal_per(PAST), val("3"), temporal_unit(MONTH)) )'

vital("body mass")
    .change()
    .num_filter(
        eq(op(PLUS_MINUS), val("2"), unit("kg"))
    )
    .temporality(
        eq(temporal_per(PAST), val("3"), temporal_unit(MONTH))
    )