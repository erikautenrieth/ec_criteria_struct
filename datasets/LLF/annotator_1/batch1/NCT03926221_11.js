'EXC'

'4.  history of substance dependence in the past six months;'

'4.  eq(temporal_per(PAST)) of cond("substance dependence") in the eq(temporal_per(PAST), val("six"), temporal_unit(MONTH)) ;'

cond("substance dependence")
    .temporality(
        eq(temporal_per(PAST), val("six"), temporal_unit(MONTH))
    )