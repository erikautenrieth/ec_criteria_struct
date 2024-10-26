'EXC'

'6.  History of acute stroke within three months before surgery ;'

'6.  eq(temporal_per(PAST)) of acute() cond("stroke") eq(op(LTEQ), val("three"), temporal_unit(MONTH)) before proc("surgery") ;'

seq(
    cond("stroke")
        .temporality(
            eq(temporal_per(PAST))
        )
        .acute(),
    before(
        proc("surgery")
            .temporality(
                eq(op(LTEQ), val("three"), temporal_unit(MONTH))
            )
    )
)