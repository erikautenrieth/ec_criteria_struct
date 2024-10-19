'EXC'

'1.  Has diabetes before pregnancy or has already been diagnosed with GDM'

'1.  Has cond("diabetes") before cond("pregnancy") or has eq(temporal_per(PAST)) been diagnosed with cond("GDM")'

union(
    seq(
        cond("diabetes"),
        before(
            cond("pregnancy")
        )
    ),
    cond("GDM")
        .temporality(
            eq(temporal_per(PAST))
        )
)