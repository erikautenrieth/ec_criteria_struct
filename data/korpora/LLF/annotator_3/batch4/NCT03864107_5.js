'INC'

'-  Weight stable ( ± 5 kg ) for at least 6 months'

'-  vital("Weight") stable() ( eq(op(PLUS_MINUS), val("5"), unit("kg")) ) for eq(op(GTEQ), val("6"), temporal_unit(MONTH))'

vital("Weight")
    .stable()
    .num_filter(
        eq(op(PLUS_MINUS), val("5"), unit("kg"))
    )
    .duration(
        eq(op(GTEQ), val("6"), temporal_unit(MONTH))
    )