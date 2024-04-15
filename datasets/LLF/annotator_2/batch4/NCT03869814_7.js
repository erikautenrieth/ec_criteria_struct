'EXC'

'2.  Any prior cancer diagnosis , without or with any treatment ( e . g . , medical , surgical , or radiation oncology ) within prior six months .'

'2.  Any eq(temporal_per(PAST)) cond("cancer") diagnosis , possible() any proc() ( e . g . , mod("medical") , mod("surgical") , or mod("radiation oncology") ) eq(op(LTEQ), temporal_per(PAST), val("six"), temporal_unit(MONTH)) .'

intersect(
    cond("cancer")
        .temporality(
            eq(temporal_per(PAST))
        ),
    proc()
        .possible()
        .mod("medical")
        .mod("surgical")
        .mod("radiation oncology")
)
    .temporality(
        eq(op(LTEQ), temporal_per(PAST), val("six"), temporal_unit(MONTH))
    )
