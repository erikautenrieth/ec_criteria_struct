'EXC'

'-  ruptured membranes or known oligohydramnios ( defined as AFI < 5 or MVP < 2 ) before'

'-  cond("ruptured membranes") or known cond("oligohydramnios") ( defined as obs("AFI") eq(op(LT), val("5")) or obs("MVP") eq(op(LT), val("2")) ) before'

union(
    cond("ruptured membranes"),
    cond("oligohydramnios")
)
    .equiv(
        union(
            obs("AFI")
                .num_filter(
                    eq(op(LT), val("5"))
                ),
            obs("MVP")
                .num_filter(
                    eq(op(LT), val("2"))
                )
        )
    )