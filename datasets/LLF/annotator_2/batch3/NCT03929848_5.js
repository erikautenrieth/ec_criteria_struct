'EXC'

'-  do not use a reinforced tracheal tube of internal diameter of 5.0 mm for female patient'

'-  do neg() use a proc("reinforced tracheal tube") of measurement("internal diameter") of eq(val("5.0"), unit("mm")) for female() patient'

if_then(
    female(),
    neg(
        intersect(
            proc("reinforced tracheal tube"),
            measurement("internal diameter")
                .num_filter(
                    eq(val("5.0"), unit("mm")) 
                )
        )
    )
)    