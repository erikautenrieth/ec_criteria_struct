'EXC'

'5.  A history of liver dysfunction after previous MEOF use or other halogenated anesthetics'

'5.  A eq(temporal_per(PAST)) of cond("liver dysfunction") after eq(temporal_per(PAST)) drug("MEOF") use or other drug("halogenated anesthetics")'

seq(
    cond("liver dysfunction")
        .temporality(
            eq(temporal_per(PAST))
        ),
    after(
        union(
            drug("MEOF"),
            drug("halogenated anesthetics")
        )
            .temporality(
                eq(temporal_per(PAST))
            )
    )
)