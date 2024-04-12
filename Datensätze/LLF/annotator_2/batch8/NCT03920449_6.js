'EXC'

'-  recurrent anal fissure after previous sphincterotomy'

'-  recurrent cond("anal fissure") after eq(temporal_per(PAST)) proc("sphincterotomy")'

seq(
    cond("anal fissure"),
    after(
        proc("sphincterotomy")
            .temporality(
                eq(temporal_per(PAST))
            )
    )
)