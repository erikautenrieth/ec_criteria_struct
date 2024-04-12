'INC'

'-  Duration of diabetes ≥ 6 months ( DSME cohort only )'

'-  Duration of cond("diabetes") eq(op(GTEQ), val("6"), temporal_unit(MONTH)) ( DSME cohort only )'

cond("diabetes")
    .duration(
        eq(op(GTEQ), val("6"), temporal_unit(MONTH))
    )