'EXC'

'3.  A positive screen for a current Substance User Disorder ( CRAFFT = 2 or higher )'

'3.  A pol(POSITIVE) screen for a eq(temporal_per(PRESENT)) cond("Substance User Disorder") ( obs("CRAFFT") eq(op(EQ), val("2"), op(GTEQ)) )'

intersect(
    cond("Substance User Disorder")
        .pol(POSITIVE)
        .temporality(
            eq(temporal_per(PRESENT))
        ),
    obs("CRAFFT")
        .num_filter(
            eq(op(EQ), val("2"), op(GTEQ))
        )
)