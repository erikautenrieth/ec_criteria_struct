'INC'

'-  Minimum of 3 hours of dialysis per session .'

'-  eq(op(GTEQ), val("3"), temporal_unit(HOUR)) of proc("dialysis") per session .'

proc("dialysis")
    .temporality(
        eq(op(GTEQ), val("3"), temporal_unit(HOUR))
    )