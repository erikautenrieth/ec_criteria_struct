'EXC'

'-  Women of childbearing potential who are not using an acceptable form of birth control'

'-  female() of cond("childbearing potential") who are neg() eq(temporal_per(PRESENT)) an acceptable form of proc("birth control")'

intersect(
    female(),
    cond("childbearing potential"),
    neg(
        proc("birth control")
    )
        .temporality(
            eq(temporal_per(PRESENT))
        )
)
