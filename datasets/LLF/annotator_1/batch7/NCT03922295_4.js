'EXC'

'-  Recurrent perforation after previous myringoplasty .'

'-  cond("Recurrent perforation") after eq(temporal_per(PAST)) proc("myringoplasty") .'

seq(
    cond("Recurrent perforation"),
    after(
        proc("myringoplasty")
            .temporality(
                eq(temporal_per(PAST))
            )
    )
)