'INC'

'-  Has had device experience for at least one year'

'-  Has had proc("device") experience for eq(op(GTEQ), val("one"), temporal_unit(YEAR))'

proc("device")
    .duration(
        eq(op(GTEQ), val("one"), temporal_unit(YEAR))
    )