'INC'

'-  LTOT - group : PaO 2 ≥ 65 mmHg and SaO 2 ≥ 92 %'

'-  cond("LTOT") pol(NEGATIVE) group : vital("PaO 2") eq(op(GTEQ), val("65"), unit("mmHg")) and vital("SaO 2") eq(op(GTEQ), val("92"), unit("%"))'

cond("LTOT")
    .pol(NEGATIVE)
    .equiv(
        intersect(
            vital("PaO 2")
                .num_filter(
                    eq(op(GTEQ), val("65"), unit("mmHg"))
                ),
            vital("SaO 2")
                .num_filter(
                    eq(op(GTEQ), val("92"), unit("%"))
                )
        )
    )
