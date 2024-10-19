'INC'

'- at least 6 months post - onset of stroke ;'

'- eq(op(GTEQ), temporal_unit(MONTH), val("6")) post - eq(temporal_rec(FIRST_TIME)) of cond("stroke") ;'

cond("stroke")
    .duration(
        eq(op(GTEQ), temporal_unit(MONTH), val("6"), temporal_rec(FIRST_TIME))
    )