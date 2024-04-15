'EXC'

'2.  Previous radiotherapy on head and neck region .'

'2.  eq(temporal_per(PAST)) proc("radiotherapy") on mod("head") and mod("neck region") .'

proc("radiotherapy")
    .temporality(
        eq(temporal_per(PAST))
    )
    .mod("head")
    .mod("neck region")
