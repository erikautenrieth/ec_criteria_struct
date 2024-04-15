'EXC'

'-  Use of regular medication , ( oral contraceptive pill or antihypertensive medication are acceptable if use has been for > 6 months )'

'-  eq(temporal_per(PRESENT)) of regular drug() , ( drug("oral contraceptive pill") or drug("antihypertensive medication") are except() use has been for eq(op(GT), val("6"), temporal_unit(MONTH)) )'

drug()
    .temporality(
        eq(temporal_per(PRESENT))
    )
    .except(
        union(
            drug("oral contraceptive pill"),
            drug("antihypertensive medication")
        )
            .temporality(
                eq(op(GT), val("6"), temporal_unit(MONTH))
            )
    )
