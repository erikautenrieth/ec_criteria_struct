'EXC'

'-  Severe hepatic ( Child B and C ) or renal insufficiency ( GFR < 30 mL / min )'

'-  severity(SEVERE) mod("hepatic") ( Child mod("B") and mod("C") ) or mod("renal") cond("insufficiency") ( lab("GFR") eq(op(LT), val("30"), unit("mL"), per(MINUTE)) )'

cond("insufficiency")
    .severity(SEVERE)
    .mod("hepatic")
    .mod("B")
    .mod("C")
    .mod("renal")
    .equiv(
        lab("GFR")
            .num_filter(
                eq(op(LT), val("30"), unit("mL"), per(MINUTE))
            )
    )
    