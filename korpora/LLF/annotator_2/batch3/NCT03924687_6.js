'INC'

'-  having stable medication for at least one month , if applicable .'

'-  having stable() drug() for eq(op(GTEQ), val("one"), temporal_unit(MONTH)) , if applicable .'

drug()
    .stable()
    .duration(
        eq(op(GTEQ), val("one"), temporal_unit(MONTH))
    )