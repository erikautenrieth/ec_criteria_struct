'INC'

'-  vitamin D deficiency by serum level < 50 nmol / l'

'-  cond("vitamin D deficiency") by lab("serum level") eq(op(LT), val("50"), unit("nmol"), unit("l"))'

cond("vitamin D deficiency")
    .equiv(
        lab("serum level")
            .num_filter(
                eq(op(LT), val("50"), unit("nmol"), unit("l"))
            )
    )