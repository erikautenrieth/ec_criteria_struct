'EXC'

'-  Severe renal impairment defined as eGFR < 30 ml / m .'

'-  severity(SEVERE) cond("renal impairment") defined as lab("eGFR") eq(op(LT), val("30"), unit("ml"), unit("m")) .'

cond("renal impairment")
    .severity(SEVERE)
    .equiv(
        lab("eGFR")
            .num_filter(
                eq(op(LT), val("30"), unit("ml"), unit("m"))
            )
        )
    