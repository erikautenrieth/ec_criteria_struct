'EXC'

'3.  Any prior central nervous system malignancy'

'3.  Any eq(temporal_per(PAST)) mod("central nervous system") cond("malignancy")'

cond("malignancy")
    .mod("central nervous system")
    .temporality(
        eq(temporal_per(PAST))
    )