'EXC'

'1.  Medical or psychological conditions that contraindicate undergoing surgery .'

'1.  mod("Medical") or mod("psychological") cond() that contraindication() undergoing proc("surgery") .'

contraindication(
    proc("surgery")
)
.caused_by(
    cond()
        .mod("Medical")
        .mod("psychological")
)