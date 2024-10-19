'EXC'

'3.  Active autoimmune disease with severe involvement .'

'3.  eq(temporal_per(PRESENT)) cond("autoimmune disease") with severity(SEVERE) involvement .'

cond("autoimmune disease")
    .temporality(
        eq(temporal_per(PRESENT))
    )
    .severity(SEVERE)
