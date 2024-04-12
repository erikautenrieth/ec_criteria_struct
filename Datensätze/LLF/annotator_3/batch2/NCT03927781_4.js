'EXC'

'-  Renal insufficiency ( eGFR < 30 mL / minute / 1.73 m 2 )'

'-  cond("Renal insufficiency") ( lab("eGFR") eq(op(LT), val("30"), unit("mL"), per(MINUTE), unit("1.73 m 2")) )'

cond("Renal insufficiency")
    .equiv(
        lab("eGFR")
            .num_filter(
                eq(op(LT), val("30"), unit("mL"), per(MINUTE), unit("1.73 m 2"))
            )
    )