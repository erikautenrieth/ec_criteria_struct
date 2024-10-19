'INC'

'3.  Immune checkpoint inhibitor therapy initiated within + / - 2 wks'

'3.  proc("Immune checkpoint inhibitor therapy") initiated eq(op(LTEQ), op(PLUS_MINUS), val("2"), temporal_unit(WEEK))'

proc("Immune checkpoint inhibitor therapy")
    .temporality(
        eq(op(LTEQ), op(PLUS_MINUS), val("2"), temporal_unit(WEEK))
    )