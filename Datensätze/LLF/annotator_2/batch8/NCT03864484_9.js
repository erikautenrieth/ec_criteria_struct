'EXC'

'-  Major depressive disorder before onset of stroke'

'-  severity(SEVERE) cond("depressive disorder") before eq(temporal_rec(FIRST_TIME)) of cond("stroke")'

seq(
    cond("depressive disorder")
        .severity(SEVERE),
    before(
        cond("stroke")
            .temporality(
                eq(temporal_rec(FIRST_TIME))
            )
    )
)