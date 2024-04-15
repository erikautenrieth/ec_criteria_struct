'INC'

'2.  Not currently pregnant or nursing ( mandatory )'

'2.  neg() eq(temporal_per(PRESENT)) cond("pregnant") or cond("nursing") ( mandatory )'

neg(
    union(
        cond("pregnant")
            .temporality(
                eq(temporal_per(PRESENT))
            ),
        cond("nursing")
    )
)