'EXC'

'-  Prior or planned administration of other investigational products within 30 days before treatment with the investigational product in this study or duirng this study .'

'-  eq(temporal_per(PAST)) or eq(temporal_per(FUTURE)) administration of other investigational drug() eq(op(LTEQ), val("30"), temporal_unit(DAY)) before proc() with the investigational drug() in this study or duirng this study .'

seq(
    drug()
        .temporality(
            or(
                eq(temporal_per(PAST)),
                eq(temporal_per(FUTURE))
            )
        ),
    before(
        intersect(
            proc(),
            drug()
        )
            .temporality(
                eq(op(LTEQ), val("30"), temporal_unit(DAY))
            )
    )
)