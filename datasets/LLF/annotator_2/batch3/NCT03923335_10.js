'EXC'

'1.  have had a previous diagnosis of any cancer or presence of any tumor other than the CRC'

'1.  have had a eq(temporal_per(PAST)) diagnosis of any cond("cancer") or presence of any cond("tumor") except() the cond("CRC")'

union(
    cond("cancer")
        .temporality(
            eq(temporal_per(PAST))
        ),
    cond("tumor")
        .except(
            cond("CRC")
        )
)