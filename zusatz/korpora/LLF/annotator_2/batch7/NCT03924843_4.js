'INC'

'-  FEV 1 > 0.8 L and ability to produce sputum after hypertonic saline production'

'-  lab("FEV 1") eq(op(GT), val("0.8"), unit("L")) and ability to produce sputum after hypertonic saline production'

lab("FEV 1")
    .num_filter(
        eq(op(GT), val("0.8"), unit("L"))
    )