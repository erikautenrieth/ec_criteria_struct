'EXC'

'-  do not use a reinforced tracheal tube of internal diameter of 5.5 mm for male patient'

'-  do neg() use a proc("reinforced tracheal tube") of measurement("internal diameter") of eq(val("5.5"), unit("mm")) for male() patient'

if_then(
    male(),
    neg(
        intersect(
            proc("reinforced tracheal tube"),
            measurement("internal diameter")
                .num_filter(
                    eq(val("5.5"), unit("mm"))
                )
        )
    )
)