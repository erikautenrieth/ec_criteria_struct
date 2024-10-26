'EXC'

'-  Anemia ( serum hemoglobin level < 10 g / dL )'

'-  cond("Anemia") ( lab("serum hemoglobin level") eq(op(LT), val("10"), unit("g"), unit("dL")) )'

cond("Anemia")
    .equiv(
        lab("serum hemoglobin level")
            .num_filter(
                eq(op(LT), val("10"), unit("g"), unit("dL"))
            )
    )