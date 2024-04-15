'EXC'

'3.  The patient was exposed to ceftazidime - avibactam before use for the index infection .'

'3.  The patient was eq(temporal_per(PAST)) to drug("ceftazidime - avibactam") before use for the index cond("infection") .'

seq(
    drug("ceftazidime - avibactam")
        .temporality(
            eq(temporal_per(PAST))
        ),
    before(
        cond("infection")
    )
)