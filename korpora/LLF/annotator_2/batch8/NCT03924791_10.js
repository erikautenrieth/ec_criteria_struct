'EXC'

'-  Surgery for sciatica at another level within one year before inclusion'

'-  proc("Surgery") for cond("sciatica") at mod("another level") eq(op(LTEQ), val("one"), temporal_unit(YEAR)) before inclusion'

proc("Surgery")
    .for(
        cond("sciatica")
    )
    .mod("another level")
    .temporality(
        eq(op(LTEQ), val("one"), temporal_unit(YEAR))
    )