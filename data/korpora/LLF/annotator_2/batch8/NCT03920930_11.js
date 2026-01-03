'EXC'

'-  chronic opioid therapy > 3 months before scheduled surgery'

'-  chronic() proc("opioid therapy") eq(op(GT), val("3"), temporal_unit(MONTH)) before eq(temporal_per(FUTURE)) proc("surgery")'

seq(
    proc("opioid therapy")
        .chronic()
        .temporality(
            eq(op(GT), val("3"), temporal_unit(MONTH))
        ),
    before(
        proc("surgery")
            .temporality(
                    eq(temporal_per(FUTURE)),
                )
    )
)