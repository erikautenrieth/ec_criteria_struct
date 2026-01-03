'EXC'

'3.  Major surgery within 4 weeks before study inclusion'

'3.  mod("Major") proc("surgery") eq(op(LTEQ), val("4"), temporal_unit(WEEK)) before study inclusion'

proc("surgery")
    .mod("Major")
    .temporality(
        eq(op(LTEQ), val("4"), temporal_unit(WEEK))
    )