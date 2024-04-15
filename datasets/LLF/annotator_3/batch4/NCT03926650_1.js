'INC'

'-  surgery continues more then 1 hour'

'-  proc("surgery") continues eq(op(GT), val("1"), temporal_unit(HOUR))'

proc("surgery")
    .duration(
        eq(op(GT), val("1"), temporal_unit(HOUR))
    )