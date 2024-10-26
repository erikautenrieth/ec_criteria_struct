'EXC'

'-  Hypoxemia ( oxygen saturation [ by pulse oximetry ] < 92 % with Fio 2 of ≥ 0.3'

'-  cond("Hypoxemia") ( vital("oxygen saturation") [ by proc("pulse oximetry") ] eq(op(LT), val("92"), unit("%")) with vital("Fio 2") of eq(op(GTEQ), val("0.3"))'

cond("Hypoxemia")
    .equiv(
        intersect(
            intersect(
                vital("oxygen saturation")
                    .num_filter(
                        eq(op(LT), val("92"), unit("%"))
                    ),
                proc("pulse oximetry")
            ),
            vital("Fio 2")
                .num_filter(
                    eq(op(GTEQ), val("0.3"))
                )
        )
    )