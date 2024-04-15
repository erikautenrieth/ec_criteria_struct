'INC'

'-  central venous catheter more than 48 hours in situ'

'-  proc("central venous catheter") eq(op(GT), val("48"), temporal_unit(HOUR)) mod("in situ")'

proc("central venous catheter")
    .duration(
        eq(op(GT), val("48"), temporal_unit(HOUR))
    )
    .mod("in situ")