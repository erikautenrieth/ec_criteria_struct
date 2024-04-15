'EXC'

'7.  Previous brain tumour surgery'

'7.  eq(temporal_per(PAST)) mod("brain") cond("tumour") proc("surgery")'

proc("surgery")
    .for(
        cond("tumour")
    )
    .temporality(
        eq(temporal_per(PAST))
    )
    .mod("brain") 