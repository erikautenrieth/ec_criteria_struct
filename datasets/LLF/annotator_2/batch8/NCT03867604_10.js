'EXC'

'-  Could not receive injection therapy , history of fainting during needling'

'-  contraindication() proc("injection therapy") , eq(temporal_per(PAST)) of cond("fainting") during proc("needling")'

contraindication(
    proc("injection therapy")
)
    .caused_by(
        seq(
            cond("fainting")
                .temporality(
                    eq(temporal_per(PAST))
                ),
            during(
                proc("needling")
            )
        )
    )