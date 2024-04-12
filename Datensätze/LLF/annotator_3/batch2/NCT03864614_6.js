'EXC'

'3.  Subject has had vagus nerve stimulation , electroconvulsive therapy , or has taken ketamine ( including esketamine ) within the current major depressive episode .'

'3.  Subject has eq(temporal_per(PAST)) proc("vagus nerve stimulation") , proc("electroconvulsive therapy") , or has eq(temporal_per(PAST)) drug("ketamine") ( including drug("esketamine") ) within the eq(temporal_per(PRESENT)) severity(SEVERE) cond("depressive episode") .'

seq(
    union(
        proc("vagus nerve stimulation")
            .temporality(
                eq(temporal_per(PAST))
            ),
            proc("electroconvulsive therapy"),
            drug("esketamine")
                .equiv(
                    drug("ketamine")
                        .temporality(
                            eq(temporal_per(PAST))
                        )
                )
    ),
    during(
        cond("depressive episode")
            .temporality(
                eq(temporal_per(PRESENT))
            )
            .severity(SEVERE)
    )
)
