'EXC'

'-  • Previous radiotherapy to the prostate'

'-  • eq(temporal_per(PAST)) proc("radiotherapy") to the cond("prostate")'

proc("radiotherapy")
    .temporality(
        eq(temporal_per(PAST))
    )
    .for(
        cond("prostate")
    )