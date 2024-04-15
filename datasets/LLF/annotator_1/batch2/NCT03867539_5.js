'EXC'

'-  pre - operative opioid usage within the last six months'

'-  pre - proc("operative") drug("opioid") usage eq(op(LTEQ), temporal_per(PAST), val("six"), temporal_unit(MONTH))'

seq(
    proc("operative"), 
    before(
        drug("opioid")
            .temporality(
                eq(op(LTEQ), temporal_per(PAST), val("six"), temporal_unit(MONTH))
            )
    )
)